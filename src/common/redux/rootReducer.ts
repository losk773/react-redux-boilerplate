import { combineReducers } from '@reduxjs/toolkit';

import { homeReducer } from '@/features/Home';

import { IState } from './types';

export const rootReducer = combineReducers<IState>({
  home: homeReducer,
});
