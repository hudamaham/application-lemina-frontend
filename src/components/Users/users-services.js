import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../app/config/rtk_query.ts";

export const useUsersApi = createApi({
  reducerPath: "UsersApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/users",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (obj) => ({
        url: "/list",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = useUsersApi;
const initialState = {};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      useUsersApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {}
    );
  },
});

export const { reducer } = userSlice;
