import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://level2-ass-6-backend-travel.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",

    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Comment", "Post", "User", "Vote"],
  endpoints: () => ({}),
});

export default baseApi;



// "https://ultimate-tripz-backend-main-b1svl0oaq-hasans-projects-3bda48be.vercel.app/api",
