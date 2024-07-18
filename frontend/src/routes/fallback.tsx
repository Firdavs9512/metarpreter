import { lazy } from "react";
import { Route } from "./router";

export const fallbackRoute: Route[] = [
  {
    path: "*",
    element: lazy(() => import("@/pages/Fallback/not-found")),
  },
];
