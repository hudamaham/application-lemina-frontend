import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../app/config/rtk_query.ts";

export const usePublicationsApi = createApi({
  reducerPath: "PublicationsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/publication",
  }),
  endpoints: (builder) => ({
    getPublications: builder.query({
      query: (obj) => ({
        url: "/list",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPublicationsQuery } = usePublicationsApi;
const initialState = {};

export const publicationSlice = createSlice({
  name: "publication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      usePublicationsApi.endpoints.getPublications.matchFulfilled,
      (state, { payload }) => {}
    );
  },
});

export const { reducer } = publicationSlice;
