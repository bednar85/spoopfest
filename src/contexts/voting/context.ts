import {
  createContext,
} from 'react';
import { type VotingStatus } from './types.ts';

interface VotingContextReturnType {
  status: VotingStatus
}

export const VotingContext = createContext<VotingContextReturnType>({
  status: {
    1: [],
    2: [],
    3: [],
  }
});