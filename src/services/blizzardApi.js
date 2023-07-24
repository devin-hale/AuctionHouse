// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const key = "2026e927d9a74c67ad509ca98402cec3";
const secret = "TUMmVK7D9CJZfOsVLqOQB8CZD7hYBHFH";

export const blizzardOAuth = createApi({
  reducerPath: "blizzardOAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://oauth.battle.net/",
  }),
  endpoints: (builder) => ({
    getToken: builder.query({
      query: () => ({
        url: `token`,
        method: "POST",
        body:
          "grant_type=client_credentials&client_id=" +
          key +
          "&client_secret=" +
          secret,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
  }),
});

export const { useGetTokenQuery } = blizzardOAuth;
