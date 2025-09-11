import { Box, Card, Flex, Image } from "@chakra-ui/react"
import { FlagIcon } from "react-flag-kit";

import { type FC } from "react"
import { type Movie } from "@/lib/types"
import  { getFlagCode } from "@/lib/card"
import { InterestSlider } from "./interest-slider"

type Props = {
  movie: Movie;
}

export const MovieCard: FC<Props> = ({ movie }) => {
  const flagCode = getFlagCode(movie.primaryLanguage);
  const showFlag = (movie.primaryLanguage !== 'English' && !!flagCode);
                
  return (
    <Card.Root backgroundColor="#00777D" overflow="hidden" maxW="xl" borderRadius="lg" mb="5" variant="subtle">
      <Card.Body>
        <Flex>
          <Box mr="7">
            <Image
              w="144px"
              h="216px"
              src={movie.posterSrc.medium}
              alt=""
              mb="3"
            />
            <InterestSlider currentMovieTitle={`${movie.title} (${movie.year})`} />
          </Box>
          <Box>
            <Card.Title color="#CEE9EB" mb="3">{movie.title} ({movie.year})</Card.Title>
            <Card.Description color="#CEE9EB" mb="3" lineClamp={6}>
              {movie.description}
              {/*
                Hiding these for now since they can be pretty spoilery
                {movie.subgenres.join(', ').toString()}
              */}  
            </Card.Description>
            {showFlag && (
              <Box mb="3">
                <FlagIcon code={flagCode} size={24} />
              </Box>
            )}
          </Box>
          {/* [external link icon] */}
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}

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