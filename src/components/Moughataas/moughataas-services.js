import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../app/config/rtk_query.ts";

export const useMoughataasApi = createApi({
  reducerPath: "MoughataasApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/moughataas",
  }),
  endpoints: (builder) => ({
    getMoughataas: builder.query({
      query: (obj) => ({
        url: "/list",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMoughataasQuery } = useMoughataasApi;
const initialState = {};

export const moughataasSlice = createSlice({
  name: "moughataas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      useMoughataasApi.endpoints.getMoughataas.matchFulfilled,
      (state, { payload }) => {}
    );
  },
});

export const { reducer } = moughataasSlice;
