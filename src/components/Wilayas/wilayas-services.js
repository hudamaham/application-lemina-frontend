import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../app/config/rtk_query.ts";

export const useWilayasApi = createApi({
  reducerPath: "WilayasApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/wilayas",
  }),
  endpoints: (builder) => ({
    getWilayas: builder.query({
      query: (obj) => ({
        url: "/list",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWilayasQuery } = useWilayasApi;
const initialState = {};

export const wilayaSlice = createSlice({
  name: "wilaya",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      useWilayasApi.endpoints.getWilayas.matchFulfilled,
      (state, { payload }) => {}
    );
  },
});

export const { reducer } = wilayaSlice;
