import { createSlice } from '@reduxjs/toolkit';

import { State } from '@/common/redux/types';

import { CounterState } from '../counter.types';

const initialState: CounterState = 0;

const sliceName = 'counter';

const counterSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    incrementAction: (state) => state + 1,
  },
});

export const selectCounter = (state: State) => state.counter;

const { actions, reducer } = counterSlice;

export const { incrementAction } = actions;

export default reducer;
