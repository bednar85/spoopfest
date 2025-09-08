import {
  type FC,
  type ReactNode,
  useState,
} from 'react';

import { type VotingStatus } from './types.ts';
import { VotingContext } from './context.ts';

type Props = {
  children?: ReactNode;
}

export const VotingContextProvider: FC<Props> = ({
  children,
}) => {
  const [votingStatus, setVotingStatus] = useState<VotingStatus>({
      1: [],
      2: [],
      3: [],
  }); 

  return (
    <VotingContext.Provider
      value={{
        status: votingStatus
      }}
    >
      {children}
    </VotingContext.Provider>
  );
};

