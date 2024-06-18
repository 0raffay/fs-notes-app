import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@/constants";
import { User } from "@/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    createUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
