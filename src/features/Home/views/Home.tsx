import React from 'react';

import { useTypedDispatch, useTypedSelector } from '@/common/redux';

import { incrementAction } from '../home.slice';

export const Home: React.FC = () => {
  const { counter } = useTypedSelector((state) => state.home);
  const dispatch = useTypedDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      <div>{counter}</div>
      <button onClick={() => dispatch(incrementAction())}>increment</button>
    </div>
  );
};
