import React from 'react';

import { useAppDispatch } from '@/common/redux';

import { incrementAction } from '../redux/home.slice';

export const IncrementButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incrementAction());
  };

  return <button onClick={handleClick}>Increment</button>;
};
