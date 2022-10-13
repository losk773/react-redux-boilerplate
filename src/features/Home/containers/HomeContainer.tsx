import React from 'react';

import { useTypedSelector } from '@/common/redux';

import { IncrementButton } from '../components/IncrementButton';
import { selectCounter } from '../home.slice';

export const HomeContainer = () => {
  const counter = useTypedSelector(selectCounter);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>{counter}</h2>
      <IncrementButton />
    </div>
  );
};
