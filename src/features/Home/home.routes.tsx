import React from 'react';
import { RouteObject } from 'react-router-dom';

import { HomeContainer } from './containers/HomeContainer';
import { HomeDetailsContainer } from './containers/HomeDetailsContainer';

export const routes: RouteObject = {
  path: '/home',
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
};
