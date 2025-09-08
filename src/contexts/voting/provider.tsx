import {
  type FC,
  type ReactNode,
  useState,
} from 'react';

import { defaultVotingContext, VotingContext } from './context.ts';
import { type VotingStatus } from './types.ts';

type Props = {
  children?: ReactNode;
}

export const VotingContextProvider: FC<Props> = ({
  children,
}) => {
  const [votingStatus, setVotingStatus] = useState<VotingStatus>(defaultVotingContext.status);

  const onChangeHandler = (currentValue: number, newValue: number, movieTitle: string) => {
    console.log('');
    console.log('VotingContextProvider');
    console.log('  movieTitle:', movieTitle);
    console.log('  currentValue:', currentValue);
    console.log('  newValue:', newValue);

    let updatedStatus;

    if (newValue === 1) {
      // remove it from currentValue group
      updatedStatus = {
        ...votingStatus,
        [currentValue]: votingStatus[currentValue as keyof VotingStatus].filter((i: string) => i !== movieTitle)
      };
    }
    else {
      // remove it from currentValue group and add it to newValue group
      updatedStatus = {
        ...votingStatus,
        [currentValue]: votingStatus[currentValue as keyof VotingStatus].filter((i: string) => i !== movieTitle),
        [newValue]: [...votingStatus[newValue as keyof VotingStatus], movieTitle],
      }
    }

    console.log('  newStatus:', updatedStatus);
    setVotingStatus(updatedStatus);
  }


  return (
    <VotingContext.Provider
      value={{
        status: votingStatus,
        onChangeHandler
      }}
    >
      {children}
    </VotingContext.Provider>
  );
};

