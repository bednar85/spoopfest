import { type InterestTracker } from '@/lib/types';

export interface GlobalContextReturnType {
  interestTracker: InterestTracker;
  onRatingClick: (movieSlug: string, newValue: number) => void;
  clearAll: () => void;
  clearGroup: (targetRating: number) => void;
  resetMovieRating: (targetMovie: string) => void;
}
