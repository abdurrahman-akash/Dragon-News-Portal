import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.jsx";
import Home from "../pages/Home.jsx";
import CategoryNews from "../pages/CategoryNews.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NewsDetails from "../pages/NewsDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

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
        loader: () => fetch("/Dragon-News-Portal/news.json"),
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
    loader: () => fetch("/Dragon-News-Portal/news.json"),
  },
  {
    path: "/*",
    element: <div>404 Not Found</div>,
  }
], {
  basename: "/Dragon-News-Portal"
});

export default router;
