import { State } from '@/common/redux/types';

export const selectHome = ({ home }: State) => home;
export const selectCounter = ({ home }: State) => home.counter;
export const selectUsers = ({ home }: State) => home.users;
