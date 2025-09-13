import { createContext } from 'react';
import { type VotingContextReturnType } from './types.ts';
import { moviesList } from '@/lib/data';

export const defaultVotingContext: VotingContextReturnType = {
  votingStatus: {
    1: [] as string[],
    2: [] as string[],
    3: [] as string[],
    4: [] as string[],
  },
  currentMovie: moviesList[0],
  onRatingClick: () => {},
  onMoviePosterClick: () => {},
};

export const VotingContext =
  createContext<VotingContextReturnType>(defaultVotingContext);
