import { Box, Stack, Center, Image } from '@chakra-ui/react';

import { type FC } from 'react';
import { type Movie } from '@/lib/types';

import { InterestSlider } from './interest-slider';
import { useVotingContext } from '@/contexts/voting/hook';

type Props = {
  movie: Movie;
};

export const MovieCard: FC<Props> = ({ movie }) => {
  const { setCurrentMovie } = useVotingContext();

  return (
    <Box>
      <Center>
        <Stack>
          <Image
            w="144px"
            h="216px"
            src={movie.posterSrc.medium}
            alt=""
            onClick={() => setCurrentMovie(movie)}
            cursor="pointer"
          />
          <InterestSlider
            currentMovieTitle={`${movie.title} (${movie.year})`}
          />
        </Stack>
      </Center>
    </Box>
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

// import  { getFlagCode } from "@/lib/card"
// import { FlagIcon } from "react-flag-kit";
// const flagCode = getFlagCode(movie.primaryLanguage);
// const showFlag = (movie.primaryLanguage !== 'English' && !!flagCode);

// <Box>
//   <Card.Title color="#CEE9EB" mb="3">{movie.title} ({movie.year})</Card.Title>
//   <Card.Description color="#CEE9EB" mb="3" lineClamp={6}>
//     {movie.description}
//     <br /><br />
//     {movie.subgenres.join(', ').toString()}
//   </Card.Description>
//   {showFlag && (
//     <Box mb="3">
//       <FlagIcon code={flagCode} size={24} />
//     </Box>
//   )}
// </Box>
