import { type FC, type ReactNode, useState } from 'react';

import { defaultGlobalContext, GlobalContext } from './context.ts';
import { type Movie } from '@/lib/types';
import { type VotingStatus } from './types.ts';

type Props = {
  children?: ReactNode;
};

export const GlobalContextProvider: FC<Props> = ({ children }) => {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(
    defaultGlobalContext.currentMovie,
  );
  const [votingStatus, setVotingStatus] = useState<VotingStatus>(
    defaultGlobalContext.votingStatus,
  );

  const onRatingClick = (
    currentValue: number,
    newValue: number,
    movieTitle: string,
  ) => {
    let updatedStatus;

    if (newValue === 1) {
      // remove it from currentValue group
      updatedStatus = {
        ...votingStatus,
        [currentValue]: votingStatus[currentValue as keyof VotingStatus].filter(
          (i: string) => i !== movieTitle,
        ),
      };
    } else {
      // remove it from currentValue group and add it to newValue group
      updatedStatus = {
        ...votingStatus,
        [currentValue]: votingStatus[currentValue as keyof VotingStatus].filter(
          (i: string) => i !== movieTitle,
        ),
        [newValue]: [
          ...votingStatus[newValue as keyof VotingStatus],
          movieTitle,
        ],
      };
    }

    console.log('  newStatus:', updatedStatus);
    setVotingStatus(updatedStatus);
  };

  return (
    <GlobalContext.Provider
      value={{
        votingStatus,
        onRatingClick,
        currentMovie,
        setCurrentMovie,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
