import {
  createContext,
} from 'react';
import { type VotingContextReturnType } from './types.ts';

export const defaultVotingContext: VotingContextReturnType = {
  status: {
    1: [] as string[],
    2: [] as string[],
    3: [] as string[],
    4: [] as string[],
  },
  onChangeHandler: () => {},
}

export const VotingContext = createContext<VotingContextReturnType>(defaultVotingContext);