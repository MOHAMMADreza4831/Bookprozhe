import {
  Navigate,
  RouteObject,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import { lazy } from "react";
import Layout from "../components/shared/layouts/mainLayout.tsx";
import { PATH_AUTH, PATH_BOOKS, PATH_DASHBOARD } from "./paths";
import AuthLayout from "../components/shared/layouts/authLayout.tsx";
// import BooksCategoryDashboardPage from "@src/components/About the book/BooksCategoryDashboardPage";
import Home from "../components/pages/Home/Home";

import Shop from "../components/shop/ShopList";
// import Splashscrean from "@src/components/login/splashscrean";
// import Login1 from "@src/components/login/login1";
// import Login2 from "@src/components/login/login2";\
import History from "../History/History";
// import Login1 from "@src/components/login/login1";
// import Login2 from "@src/components/login/login2";
// import Profile from "@src/components/pages/profile";
import EditProfile from "../components/pages/profile";
import Profilemain from "../components/pages/profile/profilemain";
import Detailprofile from "../components/pages/profile/detailprofile";
import Favorites from "../components/pages/Collection/Favorites";
import SaveCart from "../components/pages/Collection/SaveCart";
import Splashscrean from "../components/login/splashscrean";
import Login1 from "../components/login/login1";
// import ProductList from "../hooks/ProductList";
import Register from "../components/login/register";
import SearchBook from "../components/ui/buttons/SearchBook";
import Basecard from "../components/About the book/basecard";
import Login2 from "@src/components/login/login2.tsx";
import Forgotpassword from "@src/components/login/Forgot password.tsx";
import ChangePassword from "@src/components/login/changepassword.tsx";
import Loginnew from "@src/components/login/loginNEW/loginnew.tsx";
import Setpassword from "@src/components/login/Setpassword.tsx";
import Settings from "react-multi-date-picker/plugins/settings";
import Settings_page from "@src/components/Homecomponents/Settings.tsx";
// ------------------------------------------- Pages
const Dashboard = lazy(() => import("../components/pages/dashboard/main"));

const ErrorBoundary = () => {
  const error: any = useRouteError();
  return (
    <div>
      <div>خطا رخ داده است</div>
      {error}
    </div>
  );
};

const NotFound = () => {
  return <div>صفحه مورد نظر یافت نشد!</div>;
};

export const routes: RouteObject[] = [
  {
    index: true,
    element: <Splashscrean />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to={PATH_AUTH.login} replace />,
      // },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login1 />,
      },
      {
        path: "setpassword",
        element: <Setpassword />,
      },
      {
        path: "forgotpassword",
        element: <Forgotpassword />,
      },
      {
        path: "ChangePassword",
        element: <ChangePassword />,
      },
      {
        path: "loginagain",
        element: <Login2 />,
      },
      {
        path: "loginnew",
        element: <Loginnew />,
      },
      // {
      //   path: "dashboard/category/:type",
      //   element: <BooksCategoryDashboardPage />,
      // },
    ],
  },

  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Navigate to={PATH_DASHBOARD.root} replace />,
      },

      {
        path: PATH_BOOKS.navigator.details(),
        element: <Basecard />,
      },

      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "Settings_page",
        element: <Settings_page />,
      },
      {
        path: "profile",
        element: <Profilemain />,
      },
      {
        path: "editProfile/:id",
        element: <EditProfile />,
      },
      {
        path: "detailprofile",
        element: <Detailprofile />,
      },
      {
        path: "savecard",
        element: <SaveCart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "product/:id ",
      },
      {
        path: "book/:id",
        element: <Basecard />,
      },
      {
        path: PATH_DASHBOARD.root,
        errorElement: <ErrorBoundary />,

        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: PATH_DASHBOARD.navigator.search,
            element: <SearchBook />,
          },
          {
            path: PATH_DASHBOARD.navigator.profile,
            element: <History />,
          },
          {
            path: PATH_DASHBOARD.navigator.home,
            element: <Home />,
          },
        ],
      },
    ],
  },

  { path: "*", element: <NotFound /> },
];

export const router = createBrowserRouter(routes);
