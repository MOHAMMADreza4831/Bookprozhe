import {
  Navigate,
  RouteObject,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import { lazy } from "react";
import Layout from "@src/components/shared/layouts/mainLayout.tsx";
import { PATH_AUTH, PATH_BOOKS, PATH_DASHBOARD } from "./paths";
import AuthLayout from "@src/components/shared/layouts/authLayout.tsx";
import AboutHistoricalBook from "@src/components/About the book/Product";
// import BooksCategoryDashboardPage from "@src/components/About the book/BooksCategoryDashboardPage";
import ProductsPage from "@src/components/About the book/ProductsPage";
import Home from "@src/components/pages/Home/Home";
import Shop from "@src/components/shop/ShopList";
import Splashscrean from "@src/components/login/splashscrean";
import Login1 from "@src/components/login/login1";
import Login2 from "@src/components/login/login2";
import History from "@src/History/History";

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
  {},
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={PATH_AUTH.login} replace />,
      },
      {
        path: "login",
        element: <Login1 />,
      },
      {
        path: "login2",
        element: <Login2 />,
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
        element: <AboutHistoricalBook />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "products/newbook/:pageNumber",
        element: <ProductsPage />,
      },
      {
        path: "product/:id ",
      },
      {
        path: PATH_DASHBOARD.root,
        errorElement: <ErrorBoundary />,

        children: [
          // {
          //   path: "book/:id",
          //   element: <AboutHistoricalBook />,
          // },

          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: PATH_DASHBOARD.navigator.search,
            element: <div>Search</div>,
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
