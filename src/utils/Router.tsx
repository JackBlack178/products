import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "../pages/home/Home.tsx";
import { ProductMain } from "../pages/products/Product-main.tsx";
import { Layout } from "./Layout.tsx";
import { productListLoader, singleProductLoader } from "../pages/products/utils/productApi.ts";
import { ProductPage } from "../pages/products/singleProduct/ProductPage.tsx";
import { ProductChange } from "../pages/products/singleProduct/ProductChange.tsx";
import { ProductNew } from "../pages/products/singleProduct/ProductNew.tsx";



export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="products" element={<ProductMain/>} loader={productListLoader}/>
      <Route path='products/:id' element={<ProductPage/>} loader={({params}) => {
          singleProductLoader(params.id as string)
        return null
      }}/>
      <Route path='products/new' element={<ProductNew/>}/>
      <Route path='products/:id/change' element={<ProductChange/>} loader={({params}) => {
          singleProductLoader(params.id as string)
        return null
      }}/>
    </Route>

  </>

))