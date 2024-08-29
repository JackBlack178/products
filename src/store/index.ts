import { configureStore, createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { productApi } from "../pages/products/utils/productApi.ts";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppCreateSelector = createSelector.withTypes<RootState>()