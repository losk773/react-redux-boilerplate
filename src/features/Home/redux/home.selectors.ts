import { IState } from '@/common/redux/types';

export const selectHome = ({ home }: IState) => home;
export const selectCounter = ({ home }: IState) => home.counter;
export const selectUsers = ({ home }: IState) => home.users;
