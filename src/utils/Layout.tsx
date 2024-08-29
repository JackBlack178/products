import { Header } from "../features/Header.tsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export {Layout}