import './App.css'
import { Container, SimpleGrid } from "@chakra-ui/react"
import { MovieCard } from './components/molecules/movie-card'
import { moviesList } from './lib/data'

function App() {
  return (
    <Container>
      <SimpleGrid columns={[1, null, 2]} gap="40px">
        {moviesList.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
      </SimpleGrid>
    </Container>
  )
}

export default App



