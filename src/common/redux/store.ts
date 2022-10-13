import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [],
});

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => RootDispatch = useDispatch;

export default store;
