import { createContext } from 'react';
import { type GlobalContextReturnType } from './types.ts';
import { moviesList } from '@/lib/data';

export const defaultGlobalContext: GlobalContextReturnType = {
  votingStatus: {
    1: [] as string[],
    2: [] as string[],
    3: [] as string[],
    4: [] as string[],
  },
  currentMovie: moviesList[0],
  onRatingClick: () => {},
  setCurrentMovie: () => {},
};

export const GlobalContext =
  createContext<GlobalContextReturnType>(defaultGlobalContext);
