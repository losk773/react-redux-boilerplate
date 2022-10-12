import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { homeRoutes } from '@/features/Home';

import { Root } from './root';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to='/home' />,
      },
      homeRoutes,
    ],
  },
]);
