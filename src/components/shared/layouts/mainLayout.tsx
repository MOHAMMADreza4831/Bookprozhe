import { Outlet, useNavigate } from "react-router-dom";
import BottomNavigator from "../bottomNavigation";
import { useEffect } from "react";

const Layout = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const Check = localStorage.getItem("token");
    if (!Check) {
      navigate("/auth/login")
      return alert("مشکل در اتصال ب سرور ") 
}
  }, []);
  return (
    <>
      <Outlet />

      <BottomNavigator />
    </>
  );
};

export default Layout;
