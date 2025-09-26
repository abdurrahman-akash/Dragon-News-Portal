import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout.jsx";
import Home from "../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        // element: <Home />,
      },
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
