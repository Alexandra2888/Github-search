import React, { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import search from "../../assets/icon-search.svg";

interface SearchProps {
  onSearch: (username: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center bg-white dark:bg-dark-blue rounded-2xl shadow-md mb-6"
    >
      <img
        src={search}
        alt="search"
        className="absolute left-4 w-5 h-5 text-light-blue"
      />
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit" />
    </form>
  );
};

export default Search;
