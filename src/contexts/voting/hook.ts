import { useContext } from 'react';
import { VotingContext } from './context.ts';

export const useVotingContext = () => useContext(VotingContext);
