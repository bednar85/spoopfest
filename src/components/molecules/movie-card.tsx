import { Box, Card, Image } from "@chakra-ui/react"

import { type FC } from "react"
import { type Movie } from "@/assets/types"
import { InterestSlider } from "./interest-slider"

type Props = {
  movie: Movie;
}

export const MovieCard: FC<Props> = ({ movie }) => {
  return (
    <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
      <Image
        objectFit="cover"
        maxW="230px"
        src={movie.posterSrc.medium}
        alt=""
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{movie.title} ({movie.year})</Card.Title>
          <Card.Description>
            {movie.description}
            {/*
              Hiding these for now since they can be pretty spoilery
              {movie.subgenres.join(', ').toString()}
            */}
            <br />
            <br />
            {movie.primaryLanguage !== 'English' && movie.primaryLanguage}
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <InterestSlider currentMovieTitle={`${movie.title} (${movie.year})`} />
          [external link icon]
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}