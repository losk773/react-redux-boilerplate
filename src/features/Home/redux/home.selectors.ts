import { createSelector } from '@reduxjs/toolkit';

import { State } from '@/common/redux/types';

export const selectHome = ({ home }: State) => home;

export const getIsLoading = ({ home }: State) => home.loading;
export const getUserById = createSelector(
  [selectHome, (_, userId: number) => userId],
  ({ users }, userId) => users.find((user) => user.id === userId) || null,
);
