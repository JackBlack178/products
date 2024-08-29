import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootReducer } from "../../../store/rootReducer.ts";
const baseUrl = import.meta.env.VITE_BASE_URL as string

export interface IProduct {
  id: string,
  name: string,
  price: number,
  code: number,
  "image-url": string,
  rating:number,
  "reviews-count": number
}

export type Products = IProduct[]

let oneTime = true;
const delayedFetchBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: NonNullable<unknown>,
) => {
  if (oneTime) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    oneTime = false;
  }

  return fetchBaseQuery({ baseUrl: "http://localhost:3000/" })(
    args,
    api,
    extraOptions,
  );
};


export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: delayedFetchBaseQuery,
  tagTypes: ['Products'],

  endpoints: (builder) => ({
    getAllProducts: builder.query<Products, undefined>({
      query: () => `products`,
      providesTags: ['Products']
    }),
  }),

})

rootReducer.inject(productApi)

export const {useGetAllProductsQuery} = productApi
