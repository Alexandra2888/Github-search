// api/userApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GitHubUser } from '../../types/GitHubUser';

export const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
  }),
  endpoints: (builder) => ({
    fetchUser: builder.query<GitHubUser, string>({
      query: (username) => `/users/${username}`,
    }),
  }),
});

export const { useFetchUserQuery } = userApi;