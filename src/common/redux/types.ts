import { CounterState } from '@/features/Counter';
import { HomeState } from '@/features/Home';

export type State = {
  home: HomeState;
  counter: CounterState;
};
