import { CopyToClipboardButton } from '@/components/molecules/copy-to-clipboard-button';
import { VotingStatusGroup } from '@/components/molecules/voting-status-group';
import { useGlobalContext } from '@/contexts/global/hook';
import { type InterestTracker, type SlimMovie } from '@/lib/types';
import { Button, Flex, Group, Heading, SimpleGrid } from '@chakra-ui/react';
import { type FC } from 'react';

export type VotingStatus = {
  2: SlimMovie[];
  3: SlimMovie[];
  4: SlimMovie[];
};

const interestMap: Record<keyof VotingStatus, string> = {
  2: 'Kinda Interested',
  3: 'Interested',
  4: 'Very Interested',
};

const groupByInterest = (interestTracker: InterestTracker): VotingStatus => {
  const result: Record<2 | 3 | 4, SlimMovie[]> = { 2: [], 3: [], 4: [] };

  for (const movie of Object.values(interestTracker)) {
    if (
      movie.interestRating === 2 ||
      movie.interestRating === 3 ||
      movie.interestRating === 4
    ) {
      result[movie.interestRating].push(movie);
    }
  }

  return result;
};

const formatVotingStatus = (votingStatus: VotingStatus): string => {
  return ([4, 3, 2] as (keyof VotingStatus)[])
    .map((key) => {
      const label = interestMap[key];
      const movies = votingStatus[key];

      if (!movies || movies.length === 0) return '';

      const list = movies.map((m) => `- ${m.displayText}`).join('\n');
      return `${label}\n${list}`;
    })
    .filter(Boolean) // remove empty sections
    .join('\n\n');
};

export const VotingStatusTracker: FC = () => {
  const { interestTracker, clearAll } = useGlobalContext();
  const votingStatus = groupByInterest(interestTracker);

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb="3"
      >
        <Heading>Votes</Heading>
        <Group>
          <CopyToClipboardButton value={formatVotingStatus(votingStatus)} />
          <Button
            size="xs"
            variant="subtle"
            onClick={clearAll}
          >
            Clear All
          </Button>
        </Group>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap="6"
      >
        <VotingStatusGroup
          heading="Kinda Interested"
          listItemKeyPrefix="kinda-interested"
          groupKey={2}
          groupData={votingStatus['2']}
        />
        <VotingStatusGroup
          heading="Interested"
          listItemKeyPrefix="interested"
          groupKey={3}
          groupData={votingStatus['3']}
        />
        <VotingStatusGroup
          heading="Very Interested"
          listItemKeyPrefix="very-interested"
          groupKey={4}
          groupData={votingStatus['4']}
        />
      </SimpleGrid>
    </>
  );
};
