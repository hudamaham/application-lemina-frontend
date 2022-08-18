import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../app/config/rtk_query.ts";
export const useCommunesApi = createApi({
  reducerPath: "CommunesApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/communes",
  }),
  endpoints: (builder) => ({
    getCommunes: builder.query({
      query: (obj) => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCommunesQuery } = useCommunesApi;
const initialState = {};

export const communeSlice = createSlice({
  name: "communes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      useCommunesApi.endpoints.getCommunes.matchFulfilled,
      (state, { payload }) => {}
    );
  },
});

export const { reducer } = communeSlice;
