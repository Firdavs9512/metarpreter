import { Route } from "./router";
import NotFound from "@/pages/Fallback/not-found";

export const fallbackRoute: Route[] = [
  {
    path: "*",
    element: <NotFound />,
  },
];
