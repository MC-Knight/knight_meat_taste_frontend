import { backend_url } from "../utils/services";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: backend_url,
  }),
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: () => ({
        url: "/dish/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsMutation } = productsApi;
