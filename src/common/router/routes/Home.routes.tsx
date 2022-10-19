import React from 'react';
import { RouteObject } from 'react-router-dom';

import { HomeContainer, HomeDetailsContainer } from '@/features/Home';

import { ProtectedRoute } from '../ProtectedRoute';

export const homeRoutes: RouteObject[] = [
  {
    path: '/home',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <HomeContainer />,
      },
      {
        path: ':id',
        element: <HomeDetailsContainer />,
      },
    ],
  },
];
