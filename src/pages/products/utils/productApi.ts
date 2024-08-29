import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootReducer } from "../../../store/rootReducer.ts";
import { store } from "../../../store";
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

  return fetchBaseQuery({ baseUrl: baseUrl })(
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
    getProduct: builder.query<IProduct, string>({
      query: (id) => `products/${id}`,
      providesTags: ['Products']
    }),
    changeProduct: builder.mutation<void, IProduct>({
      query: ({id, ...patch}) => ({
        url: `products/${id}`,
        method: "PUT",
        body: patch
      }),
      invalidatesTags: ['Products']
    }),
    newProduct: builder.mutation<IProduct, Omit<IProduct, 'id'>>({
      query: (data) => ({
        url: `products`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['Products']
    }),

  }),

})

rootReducer.inject(productApi)

export const singleProductLoader = async(id:string) => {
  store.dispatch(productApi.util.prefetch('getProduct', id, {}))
}

export const productListLoader = () => {
  store.dispatch(productApi.util.prefetch('getAllProducts', undefined, {}))
  return null
}

