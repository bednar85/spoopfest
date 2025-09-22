import { InterestSlider } from '@/components/molecules/interest-slider';
import { getFlagCode } from '@/lib/card';
import { type Movie } from '@/lib/types';
import { Badge, Box, Card, Wrap } from '@chakra-ui/react';
import { type FC } from 'react';
import { FlagIcon } from 'react-flag-kit';

type Props = {
  movie: Movie;
};

export const MovieCard: FC<Props> = ({ movie }) => {
  const flagCode = getFlagCode(movie.primaryLanguage);
  const isSubtitled = movie.primaryLanguage !== 'English' && !!flagCode;
  const showSubgenres = !movie.subgenres.includes('Not Sure');
  const movieLabel = `${movie.title} (${movie.year})`;

  return (
    <Card.Root
      variant="subtle"
      backgroundColor="#00777d"
      borderRadius="0"
      maxW="lg"
      minH="350px"
      px="7"
      py="3"
    >
      <InterestSlider movieSlug={movie.slug} />
      <Card.Title
        color="#BDD0A0"
        mb="3"
      >
        {movieLabel}
      </Card.Title>
      <Card.Description
        color="#BDD0A0"
        mb="3"
      >
        {movie.description}
      </Card.Description>
      {showSubgenres && (
        <Wrap mb="3">
          {movie.subgenres.map((subgenre: string, index: number) => (
            <Badge
              key={`subgenre-${index}`}
              colorPalette="teal"
              variant="solid"
              size="sm"
            >
              {subgenre}
            </Badge>
          ))}
        </Wrap>
      )}
      {isSubtitled && (
        <Box mb="3">
          <FlagIcon
            code={flagCode}
            size={24}
          />
        </Box>
      )}
    </Card.Root>
  );
};

// forest
// #014633
// #BDD0A0
// #FEF8DD

// seafoam
// #00777D
// #CEE9EB
// #FEF8DD

// marigold
// #EFAF02
// #FFEEB2
// #FEF8DD
