import { Route } from "./router";
import Dashboard from "@/pages/Dashboard/Home";

export const privateRoutes: Route[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
