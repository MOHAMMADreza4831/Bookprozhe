import { Outlet, useNavigate } from "react-router-dom";
import BottomNavigator from "../bottomNavigation";
import { useEffect } from "react";
import axioshandel from "@src/components/login/header";

const Layout = () => {

  return (
    <>
      <Outlet />

      <BottomNavigator />
    </>
  );
};

export default Layout;
