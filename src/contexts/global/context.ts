import { createContext } from 'react';
import { type GlobalContextReturnType } from './types.ts';
import { type InterestTracker } from '@/lib/types';
import { moviesList } from '@/lib/data';

const defaultInterestTracker = moviesList.reduce<InterestTracker>(
  (acc, { slug, title, year }) => {
    acc[slug] = {
      displayText: `${title} (${year})`,
      interestRating: 1,
      slug,
    };
    return acc;
  },
  {},
);

export const defaultGlobalContext: GlobalContextReturnType = {
  interestTracker: defaultInterestTracker,
  onRatingClick: () => {},
  clearAll: () => {},
  clearGroup: () => {},
  resetMovieRating: () => {},
};

export const GlobalContext =
  createContext<GlobalContextReturnType>(defaultGlobalContext);
