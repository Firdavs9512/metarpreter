import AuthLayout from "@/pages/Auth/AuthLayout";
import { Route } from "./router";
import { lazy } from "react";

export const publicRoutes: Route[] = [
  {
    path: "/",
    element: lazy(() => import("@/pages/Auth/Login")),
    layout: AuthLayout,
  },
  {
    path: "/register",
    element: lazy(() => import("@/pages/Auth/Register")),
    layout: AuthLayout,
  },
];
