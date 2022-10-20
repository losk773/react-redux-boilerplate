import React from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import { RootLayout } from './RootLayout';
import { counterRoutes } from './routes/Counter.routes';
import { homeRoutes } from './routes/Home.routes';

const routesMap: RouteObject[] = [...homeRoutes, counterRoutes];

export default createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' />,
      },
      ...routesMap,
    ],
  },
]);
