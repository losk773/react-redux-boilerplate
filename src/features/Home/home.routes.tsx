import React from 'react';
import { RouteObject } from 'react-router-dom';

import { HomeContainer } from './containers/HomeContainer';

export const routes: RouteObject = {
  path: '/home',
  element: <HomeContainer />,
};
