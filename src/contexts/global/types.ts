import { type Movie } from '@/lib/types';

export type VotingStatus = {
  1: string[];
  2: string[];
  3: string[];
  4: string[];
};

export interface GlobalContextReturnType {
  votingStatus: VotingStatus;
  onRatingClick: (
    currentValue: number,
    newValue: number,
    movieTitle: string,
  ) => void;
  currentMovie: Movie | null;
  setCurrentMovie: (movie: Movie | null) => void;
}
