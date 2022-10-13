import React from 'react';
import { RouteObject } from 'react-router-dom';

import { Home } from './views/Home';

export const routes: RouteObject = {
  path: '/home',
  element: <Home />,
};
