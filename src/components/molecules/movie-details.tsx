import { Box, Card, CloseButton } from '@chakra-ui/react';
import { type FC } from 'react';
import { getFlagCode } from '@/lib/card';
import { FlagIcon } from 'react-flag-kit';
import { useVotingContext } from '@/contexts/voting/hook';

export const MovieDetails: FC = () => {
  const { currentMovie, setCurrentMovie } = useVotingContext();

  if (!currentMovie) {
    return null;
  }

  const flagCode = getFlagCode(currentMovie.primaryLanguage);
  const isSubtitled = currentMovie.primaryLanguage !== 'English' && !!flagCode;

  return (
    <Box
      position="fixed"
      bottom="40px"
      left="40px"
      zIndex="1"
    >
      <Box
        w="30px"
        position="absolute"
        top="-30px"
        left="0"
        transform="rotate(-90deg)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </Box>
      <Card.Root
        backgroundColor="#FFFFFF"
        borderRadius="0"
        borderTopRightRadius="30px"
        variant="subtle"
        maxW="lg"
        p="7"
      >
        <CloseButton
          background="none"
          variant="solid"
          position="absolute"
          top="10px"
          right="10px"
          onClick={() => setCurrentMovie(null)}
        />
        <Card.Title
          color="#014633"
          mb="3"
        >
          {currentMovie.title} ({currentMovie.year})
        </Card.Title>
        <Card.Description
          color="#014633"
          mb="3"
        >
          {currentMovie.description}
          {/* <br /><br />
          {currentMovie.subgenres.join(', ').toString()} */}
        </Card.Description>
        {isSubtitled && (
          <Box>
            <FlagIcon
              code={flagCode}
              size={24}
            />
          </Box>
        )}
      </Card.Root>
      <Box
        w="30px"
        position="absolute"
        bottom="0"
        right="-30px"
        transform="rotate(-90deg)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </Box>
    </Box>
  );
};
