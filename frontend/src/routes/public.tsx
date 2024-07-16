import Login from "@/pages/Auth/Login";
import { Route } from "./router";
import Register from "@/pages/Auth/Register";

export const publicRoutes: Route[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
