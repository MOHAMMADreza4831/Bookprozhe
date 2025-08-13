import { Outlet } from "react-router-dom";
import BottomNavigator from "../bottomNavigation";

const Layout = () => {
  return (
    <>
      <Outlet />

      <BottomNavigator />
    </>
  );
};

export default Layout;
