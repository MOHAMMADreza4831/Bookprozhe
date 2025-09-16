import { check } from "prettier";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const Check = localStorage.getItem("accessToken");
    if (!Check) {
      navigate("login1");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
