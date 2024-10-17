import React, { useState } from "react";
import company from "../../assets/icon-company.svg";
import location from "../../assets/icon-location.svg";
import twitter from "../../assets/icon-twitter.svg";
import website from "../../assets/icon-website.svg";
import Search from "../search/Search";
import { useFetchUserQuery } from "../../store/api/userApi";

const UserProfile: React.FC = () => {
  const [username, setUsername] = useState("octocat");
  const { data: user, error, isFetching } = useFetchUserQuery(username);

  const handleSearch = (searchUsername: string) => {
    if (searchUsername) setUsername(searchUsername);
  };

  if (isFetching) return <div>Loading...</div>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (error) return <div>Error: {(error as any).message}</div>;
  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto p-4 dark:bg-dark-blue rounded-xl">
      <Search onSearch={handleSearch} />

      <main className="bg-white dark:bg-dark-blue  rounded-md p-6 my-6">
        <section className="flex items-center mb-6">
          <img
            src={user.avatar_url}
            alt={user.name}
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-light-blue">@{user.login}</p>
            <p>Joined {new Date(user.created_at).toDateString()}</p>
          </div>
        </section>

        <p className="mb-6">
          {user.bio ||
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
        </p>

        <section className="bg-gray-blue dark:bg-dark-bg  rounded-md p-4 flex justify-between mb-6">
          <div>
            <div className="dark:text-white">Repos</div>
            <div className="font-bold">{user.public_repos}</div>
          </div>
          <div>
            <div className="dark:text-white">Followers</div>
            <div className="font-bold">{user.followers}</div>
          </div>
          <div>
            <div className="dark:text-white">Following</div>
            <div className="font-bold">{user.following}</div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <img src={location} alt="Location" className="mr-2" />
            <span>{user.location || "Not Available"}</span>
          </div>
          <div className="flex items-center">
            <img src={website} alt="Website" className="mr-2" />
            <a href={user.blog} target="_blank" rel="noopener noreferrer">
              {user.blog || "Not Available"}
            </a>
          </div>
          <div className="flex items-center">
            <img src={twitter} alt="Twitter" className="mr-2" />
            <span>
              {user.twitter_username
                ? `@${user.twitter_username}`
                : "Not Available"}
            </span>
          </div>
          <div className="flex items-center">
            <img src={company} alt="Company" className="mr-2" />
            <span>{user.company || "Not Available"}</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
