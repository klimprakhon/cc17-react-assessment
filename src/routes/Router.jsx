import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
