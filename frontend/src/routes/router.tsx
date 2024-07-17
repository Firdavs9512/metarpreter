/* eslint-disable @typescript-eslint/no-explicit-any */
import ProtectedRoute from "@/components/provider/ProtectedRoute";
import { RouteObject, useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";
import { privateRoutes } from "./private";
import { fallbackRoute } from "./fallback";
import React, { Suspense } from "react";
import RootLayout from "@/components/provider/RootLayout";
import LoadingAnimation from "@/components/ui/loading-animation";

export interface Route {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<any>>;
  layout?:
    | React.LazyExoticComponent<React.ComponentType<any>>
    | React.ComponentType<any>;
}

export default function Router() {
  const parseRouteObjects = (
    routes: Route[],
    isPrivate: boolean = false
  ): RouteObject[] => {
    return routes.map((route) => ({
      path: route.path,
      element: (
        <Suspense fallback={<LoadingAnimation />}>
          {isPrivate ? (
            <ProtectedRoute>
              {route.layout ? (
                <route.layout>{<route.element />}</route.layout>
              ) : (
                <route.element />
              )}
            </ProtectedRoute>
          ) : route.layout ? (
            <route.layout>{<route.element />}</route.layout>
          ) : (
            <route.element />
          )}
        </Suspense>
      ),
    }));
  };

  const publicRouteObjects = parseRouteObjects(publicRoutes);
  const privateRouteObjects = parseRouteObjects(privateRoutes, true);
  const fallbackRouteObjects = parseRouteObjects(fallbackRoute);

  const routes = [
    ...publicRouteObjects,
    ...privateRouteObjects,
    ...fallbackRouteObjects,
  ];

  const allRoutes = useRoutes(routes);

  return (
    <React.Fragment>
      <RootLayout>{allRoutes}</RootLayout>
    </React.Fragment>
  );
}
