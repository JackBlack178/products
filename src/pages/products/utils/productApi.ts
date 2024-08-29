import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
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

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  tagTypes: ['Products'],

  endpoints: (builder) => ({
    getAllProducts: builder.query<Products, undefined>({
      query: () => `products`,
      providesTags: ['Products']
    }),
  }),

})

export const {useGetAllProductsQuery} = productApi
