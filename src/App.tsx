import './index.css';
import { Container } from '@chakra-ui/react';
import { Carousel } from './components/molecules/carousel';
import { VotingStatusTracker } from './components/molecules/voting-status-tracker';

function App() {
  return (
    <>
      <Carousel />
      <Container p="3">
        <VotingStatusTracker />
      </Container>
    </>
  );
}

export default App;
