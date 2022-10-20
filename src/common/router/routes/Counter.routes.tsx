import React from 'react';
import { RouteObject } from 'react-router-dom';

import { CounterContainer } from '@/features/Counter';

export const counterRoutes: RouteObject = {
  path: '/counter',
  element: <CounterContainer />,
};
