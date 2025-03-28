import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse} from "./types";


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/"}),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "api/kpis",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "api/products",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "api/transactions",
      providesTags: ["Transactions"],
  }),
}),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;

