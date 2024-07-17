import DashboardLayout from "@/pages/Dashboard/DashboardLayout";
import { Route } from "./router";
import { lazy } from "react";

export const privateRoutes: Route[] = [
  {
    path: "/dashboard",
    element: lazy(() => import("@/pages/Dashboard/Home")),
    layout: DashboardLayout,
  },
  {
    path: "/dashboard/open-port-check",
    element: lazy(() => import("@/pages/Dashboard/OpenPortCheck")),
    layout: DashboardLayout,
  },
];
