import './App.css'
import { Box, Container, SimpleGrid } from "@chakra-ui/react"
import { MovieCard } from './components/molecules/movie-card'
import { MovieDetails } from './components/molecules/movie-details'
import { moviesList } from './lib/data'

function App() {
  return (
    <Box backgroundColor="#FFFFFF" width="100vw" height="100vh">
      <Container className="window-frame" backgroundColor="#657977" p="7" pt="20">
        <MovieDetails movie={moviesList[0]} />
        <SimpleGrid columns={[2, 3, 4]} gap="40px">
          {moviesList.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default App