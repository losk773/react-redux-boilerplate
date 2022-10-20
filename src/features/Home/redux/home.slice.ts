import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';

import { State } from '@/common/redux/types';

import { HomeState, User } from '../home.types';
import { getUserById, getUsers } from '../requests/users.requests';

const initialState: HomeState = {
  counter: 0,
  users: [],
  loading: false,
  error: null,
};

const sliceName = 'home';

export const fetchUsers = createAsyncThunk<User[]>(`${sliceName}/fetchUsers`, getUsers);
export const fetchUserById = createAsyncThunk<User, string>(`${sliceName}/fetchUserById`, (id) =>
  getUserById(id),
);

export const homeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    incrementAction: (state) => ({ ...state, counter: state.counter + 1 }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });

    builder.addCase(fetchUserById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserById.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.users.push(payload);
    });
    builder.addCase(fetchUserById.rejected, (state, { error }) => {
      state.error = error.message;
      state.loading = false;
    });
  },
});

const { actions, reducer } = homeSlice;

export const selectHome = ({ home }: State) => home;

export const selectIsLoading = ({ home }: State) => home.loading;

export const selectUserById = createSelector(
  [selectHome, (_, userId: number) => userId],
  ({ users }, userId) => users.find((user) => user.id === userId) || null,
);

export const { incrementAction } = actions;

export default reducer;
