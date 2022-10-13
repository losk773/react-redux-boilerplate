import React from 'react';

import { useTypedDispatch } from '@/common/redux';

import { incrementAction } from '../home.slice';

export const IncrementButton = () => {
  const dispatch = useTypedDispatch();

  const handleClick = () => {
    dispatch(incrementAction());
  };

  return <button onClick={handleClick}>Increment</button>;
};
