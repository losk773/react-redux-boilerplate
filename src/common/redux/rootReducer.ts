import { combineReducers } from '@reduxjs/toolkit';

import { counterReducer } from '@/features/Counter';
import { homeReducer } from '@/features/Home';

import { State } from './types';

export const rootReducer = combineReducers<State>({
  home: homeReducer,
  counter: counterReducer,
});
