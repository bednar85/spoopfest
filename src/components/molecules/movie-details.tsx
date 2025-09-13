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
    <Box position="fixed" bottom="40px" left="40px" zIndex="1">
      <Box w="30px" position="absolute" top="-30px" left="0" transform="rotate(-90deg)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#FFFFFF"></path></svg>
      </Box>
      <Card.Root backgroundColor="#FFFFFF" borderRadius="0" borderTopRightRadius="30px" variant="subtle" maxW="lg"  p="7">
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
      <Box w="30px" position="absolute" bottom="0" right="-30px" transform="rotate(-90deg)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#FFFFFF"></path></svg>
      </Box>
    </Box>
  )
}