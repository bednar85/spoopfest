import { RatingGroup } from '@chakra-ui/react';
import { type FC } from 'react';
import { useGlobalContext } from '@/contexts/global/hook';

const emojiMap: Record<string, string> = {
  1: '😐',
  2: '🤔',
  3: '🙂',
  4: '😃',
};

type Props = {
  movieSlug: string;
};

export const InterestSlider: FC<Props> = ({ movieSlug }) => {
  const { interestTracker, onRatingClick } = useGlobalContext();

  return (
    <RatingGroup.Root
      count={4}
      defaultValue={1}
      onValueChange={(e) => {
        onRatingClick(movieSlug, e.value);
      }}
      value={interestTracker[movieSlug]?.interestRating}
      mb="3"
    >
      <RatingGroup.Control>
        {Array.from({ length: 4 }).map((_, index) => (
          <RatingGroup.Item
            key={index}
            index={index + 1}
            minW="9"
            filter={{ base: 'grayscale(1)', _checked: 'revert' }}
            transition="scale 0.1s"
            _hover={{ scale: '1.1' }}
          >
            {emojiMap[index + 1]}
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
};
