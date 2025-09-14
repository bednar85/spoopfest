import { Box, Card, CloseButton } from '@chakra-ui/react';
import { type FC } from 'react';
import { getFlagCode } from '@/lib/card';
import { FlagIcon } from 'react-flag-kit';
import { useGlobalContext } from '@/contexts/global/hook';

// not sure if I want this styled like it's part of the frame or like one of Colab's carousel cards where they have like a fun little cut out for a more info button with an arrow
// https://colabs.com.au/services/build-a-lab
// I really like this page where you can swipe/drag and it changes the image on the left and the content on the right, might be a fun way to interact with it instead of scrolling a frame
// then could have like 3 columns below that showing how the voting is going...
export const MovieDetails: FC = () => {
  const { currentMovie, setCurrentMovie } = useGlobalContext();

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
          />
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
          />
        </svg>
      </Box>
    </Box>
  );
};
