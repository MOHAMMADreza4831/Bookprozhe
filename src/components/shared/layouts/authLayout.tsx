import { check } from "prettier";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  
  return (
    <div className="h-[100vh]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
