import { configureStore, createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { productApi } from "../pages/products/utils/productApi.ts";
import { rootReducer } from "./rootReducer.ts";


export const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)

})


export type RootState = unknown
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppCreateSelector = createSelector.withTypes<RootState>()