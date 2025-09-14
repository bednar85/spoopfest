import './App.css';
import { Box, Container, Flex, SimpleGrid } from '@chakra-ui/react';
import { MovieCard } from './components/molecules/movie-card';
import { MovieDetails } from './components/molecules/movie-details';
import { VotingStatusTracker } from './components/molecules/voting-status-tracker';
import { moviesList } from './lib/data';

function App() {
  return (
    <Box
      backgroundColor="#FFFFFF"
      width="100vw"
      height="100vh"
    >
      <Flex
        p="40px"
        pr="10px"
        pt="10px"
      >
        <Container
          className="window-frame"
          backgroundColor="#657977"
          // p="7"
          py="20"
        >
          <MovieDetails />
          <SimpleGrid
            columns={[2, 3, 4]}
            gap="40px"
          >
            {moviesList.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </SimpleGrid>
        </Container>
        <VotingStatusTracker />
      </Flex>
    </Box>
  );
}

export default App;

// #657977
