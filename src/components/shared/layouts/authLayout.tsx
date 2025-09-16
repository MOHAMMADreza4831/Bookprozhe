import { check } from "prettier";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
