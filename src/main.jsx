import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/createpost",
    element: <CreatePost />,
  },
  {
    path: "/posts/:id",
    element: <Posts />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
