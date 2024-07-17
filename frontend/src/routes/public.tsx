import { Route } from "./router";
import { lazy } from "react";

export const publicRoutes: Route[] = [
  {
    path: "/",
    element: lazy(() => import("@/pages/Auth/Login")),
  },
  {
    path: "/register",
    element: lazy(() => import("@/pages/Auth/Register")),
  },
];
