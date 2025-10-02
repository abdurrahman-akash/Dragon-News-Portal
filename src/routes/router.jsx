import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.jsx";
import Home from "../pages/Home.jsx";
import CategoryNews from "../pages/CategoryNews.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NewsDetails from "../pages/NewsDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Profile from "../pages/Profile.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Loading from "../pages/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading />,
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      }
    ],
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute><NewsDetails /></PrivateRoute>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: "/profile",
    element: <PrivateRoute><Profile /></PrivateRoute>,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  }
]);

export default router;
