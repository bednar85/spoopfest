import { type FC } from 'react';
import {
  Box,
  Button,
  CloseButton,
  Em,
  Flex,
  Heading,
  List,
  Text,
} from '@chakra-ui/react';
import { useGlobalContext } from '@/contexts/global/hook';

import { type SlimMovie } from '@/lib/types';

const sortByTitleIgnoringArticles = (movies: SlimMovie[]): SlimMovie[] => {
  const ignoreArticles = (str: string): string =>
    str
      .trim()
      .toLowerCase()
      .replace(/^(a |an |the )/i, ''); // remove leading "a ", "an ", "the "

  return [...movies].sort((a, b) => {
    const titleA = ignoreArticles(a.displayText);
    const titleB = ignoreArticles(b.displayText);

    return titleA.localeCompare(titleB, 'en', { sensitivity: 'base' });
  });
};

type Props = {
  heading: string;
  groupKey: number;
  listItemKeyPrefix: string;
  groupData: SlimMovie[];
};

export const VotingStatusGroup: FC<Props> = ({
  groupData,
  heading,
  groupKey,
  listItemKeyPrefix,
}) => {
  const { clearGroup, resetMovieRating } = useGlobalContext();

  return (
    <Box minH="100">
      <Box mb="3">
        <Flex
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading mr="3">{heading}</Heading>
          <Button
            size="xs"
            variant="subtle"
            onClick={() => clearGroup(groupKey)}
          >
            Clear Group
          </Button>
        </Flex>
        <Text textStyle="sm">
          <Em>{groupData.length} Picks</Em>
        </Text>
      </Box>
      <List.Root ml="5">
        {sortByTitleIgnoringArticles(groupData).map((movie, index) => (
          <List.Item
            key={`${listItemKeyPrefix}-${index}`}
            mb="2"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
            >
              {movie.displayText}
              <CloseButton
                size="2xs"
                variant="subtle"
                onClick={() => resetMovieRating(movie.slug)}
              />
            </Flex>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};
