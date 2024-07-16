import ProtectedRoute from "@/components/provider/ProtectedRoute";
import { RouteObject, useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { privateRoutes } from "./private";
import { fallbackRoute } from "./fallback";
import React from "react";

export interface Route {
  path: string;
  element: JSX.Element | any;
}

export default function Router() {
  const parseRouteObjects = (
    routes: Route[],
    isPrivate: boolean = false,
  ): RouteObject[] => {
    return routes.map((route) => ({
      path: route.path,
      element: isPrivate ? (
        <ProtectedRoute>{route.element}</ProtectedRoute>
      ) : (
        route.element
      ),
    }));
  };

  const publicRouteObjects = parseRouteObjects(publicRoutes);
  const privateRouteObjects = parseRouteObjects(privateRoutes);
  const fallbackRouteObjects = parseRouteObjects(fallbackRoute);

  const routes = [
    ...publicRouteObjects,
    ...privateRouteObjects,
    ...fallbackRouteObjects,
  ];

  const allRoutes = useRoutes(routes);

  return <React.Fragment> {allRoutes} </React.Fragment>;
}
