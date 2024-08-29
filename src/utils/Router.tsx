import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "../pages/home/Home.tsx";
import { ProductMain } from "../pages/products/Product-main.tsx";
import { Layout } from "./Layout.tsx";

export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="products" element={<ProductMain/>}/>
    </Route>

  </>

))