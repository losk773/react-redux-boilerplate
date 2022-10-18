import { apiService } from '@/common/api';

import { User } from '../home.types';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await apiService.get<User[]>('/users');

  return data;
};

export const getUserById = async (id: string): Promise<User> => {
  const { data } = await apiService.get<User>(`/users/${id}`);

  return data;
};
