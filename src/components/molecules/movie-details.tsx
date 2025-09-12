import { Box, Card } from "@chakra-ui/react"

import { type FC } from "react"
import  { getFlagCode } from "@/lib/card"
import { FlagIcon } from "react-flag-kit";
import { type Movie } from "@/lib/types"
  
type Props = {
  movie: Movie;
}

export const MovieDetails: FC<Props> = ({ movie }) => {
  const flagCode = getFlagCode(movie.primaryLanguage);
  const isSubtitled = (movie.primaryLanguage !== 'English' && !!flagCode);

  return (
    <>
      {/* add that curvey svg here */}
      <Card.Root backgroundColor="#FFFFFF" borderRadius="0" borderTopRightRadius="30px" variant="subtle" maxW="lg" position="fixed" bottom="39px" left="40px" zIndex="1" p="7">
        <Card.Title mb="3">{movie.title} ({movie.year})</Card.Title>
        <Card.Description mb="3" lineClamp={6}>
          {movie.description}
          {/* <br /><br />
          {movie.subgenres.join(', ').toString()} */}
        </Card.Description>
        {isSubtitled && (
          <Box>
            <FlagIcon code={flagCode} size={24} />
          </Box>
        )}
      </Card.Root>
      {/* add that curvey svg here */}
    </>
  )
}