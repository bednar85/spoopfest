import { Badge, Box, Card, Image, Wrap } from '@chakra-ui/react';
import { type FC } from 'react';
import { getFlagCode } from '@/lib/card';
import { FlagIcon } from 'react-flag-kit';
import { type Movie } from '@/lib/types';
import { InterestSlider } from '@/components/molecules/interest-slider';

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
      className="carousel-cell"
      backgroundColor="transparent"
      variant="subtle"
      maxW="lg"
      p="7"
      h="100%"
    >
      <Image
        w="144px"
        h="216px"
        src={movie.posterSrc.medium}
        alt=""
        mb="3"
      />
      <Card.Title
        color="#BDD0A0"
        mb="3"
      >
        {movieLabel}
      </Card.Title>
      <Card.Description
        color="#BDD0A0"
        lineClamp={5}
        mb="3"
      >
        {movie.description}
      </Card.Description>
      {showSubgenres && (
        <Wrap mb="3">
          {movie.subgenres.map((subgenre: string) => (
            <Badge
              colorPalette="teal"
              variant="solid"
              size="md"
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
      <InterestSlider movieSlug={movie.slug} />
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
