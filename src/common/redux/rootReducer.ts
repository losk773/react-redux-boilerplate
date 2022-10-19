import { combineReducers } from '@reduxjs/toolkit';

import { homeReducer } from '@/features/Home';

import { State } from './types';

export const rootReducer = combineReducers<State>({
  home: homeReducer,
});
