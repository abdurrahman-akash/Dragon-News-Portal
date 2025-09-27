import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.jsx";
import Home from "../pages/Home.jsx";
import CategoryNews from "../pages/CategoryNews.jsx";

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
      }
    ],
  },
  {
    path: "/auth",
    element: <div>Auth</div>,
  },
  {
    path: "/news",
    element: <div>News</div>,
  },
  {
    path: "/*",
    element: <div>404 Not Found</div>,
  }
]);

export default router;
