import { RatingGroup } from '@chakra-ui/react';
import { type FC, useState } from 'react';
import { useGlobalContext } from '@/contexts/global/hook';

const emojiMap: Record<string, string> = {
  1: '😐',
  2: '🤔',
  3: '🙂',
  4: '😃',
};

type Props = {
  currentMovieTitle?: string;
};

export const InterestSlider: FC<Props> = ({ currentMovieTitle }) => {
  const { onRatingClick } = useGlobalContext();
  const [value, setValue] = useState(1);

  return (
    <RatingGroup.Root
      count={4}
      defaultValue={1}
      onValueChange={(e) => {
        onRatingClick(value, e.value, currentMovieTitle || '');
        setValue(e.value);
      }}
      value={value}
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
