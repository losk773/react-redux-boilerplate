import React from 'react';

import { useAppSelector } from '@/common/redux';

import { IncrementButton } from '../components/IncrementButton';
import { selectCounter } from '../redux/counter.slice';

export const CounterContainer = () => {
  const counter = useAppSelector(selectCounter);

  return (
    <div>
      <h1>Counter Page</h1>
      <h2>{counter}</h2>
      <IncrementButton />
    </div>
  );
};
