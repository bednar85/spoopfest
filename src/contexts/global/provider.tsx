import { type FC, type ReactNode, useState } from 'react';

import { defaultGlobalContext, GlobalContext } from './context';
import { type InterestTracker } from '@/lib/types';
import { useLocalStorage } from '@uidotdev/usehooks';

type Props = {
  children?: ReactNode;
};

export const GlobalContextProvider: FC<Props> = ({ children }) => {
  const [savedInterestTrackerState, saveInterestTrackerState] =
    useLocalStorage<string>('savedInterestTrackerState', '');
  const [interestTracker, setInterestTracker] = useState<InterestTracker>(
    (savedInterestTrackerState && JSON.parse(savedInterestTrackerState)) ||
      defaultGlobalContext.interestTracker,
  );

  const updateAndSaveInterestTracker = (
    updatedInterestTracker: InterestTracker,
  ) => {
    setInterestTracker(updatedInterestTracker);
    saveInterestTrackerState(JSON.stringify(updatedInterestTracker));
  };

  const onRatingClick = (movieSlug: string, newValue: number) => {
    const updatedStatus = {
      ...interestTracker,
      [movieSlug]: {
        ...interestTracker[movieSlug],
        interestRating: newValue,
      },
    };
    updateAndSaveInterestTracker(updatedStatus);
  };

  const clearAll = () => {
    updateAndSaveInterestTracker(defaultGlobalContext.interestTracker);
  };

  const clearGroup = (targetRating: number) => {
    const updatedStatus = {
      ...interestTracker,
    };

    for (const movie of Object.values(updatedStatus)) {
      if (movie.interestRating === targetRating) {
        movie.interestRating = 1;
      }
    }

    updateAndSaveInterestTracker(updatedStatus);
  };

  const resetMovieRating = (movieSlug: string) => {
    onRatingClick(movieSlug, 1);
  };

  return (
    <GlobalContext.Provider
      value={{
        interestTracker,
        onRatingClick,
        clearAll,
        clearGroup,
        resetMovieRating,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
