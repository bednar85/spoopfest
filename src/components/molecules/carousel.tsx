import Flickity from 'react-flickity-component';
import { Button, Center, Stack, Text } from '@chakra-ui/react';
import 'flickity/css/flickity.css';
import { MovieCard } from '@/components/molecules/movie-card';
import { useLocalStorage } from '@uidotdev/usehooks';
import { moviesList } from '@/lib/data';
import { type FC, useRef, useState } from 'react';

const defaultFlickityOptions = {
  initialIndex: 0,
  pageDots: false,
  prevNextButtons: false,
};

export const Carousel: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [lastViewedIndex, saveLastViewedIndex] = useLocalStorage(
    'lastViewedIndex',
    null,
  );
  const ref = useRef<Flickity>(null);

  return (
    <Stack mb="3">
      <Flickity
        className="carousel"
        elementType="div"
        options={{
          ...defaultFlickityOptions,
          initialIndex: lastViewedIndex,
        }}
        static
        flickityRef={(c) => {
          ref.current = c;
          if (c) {
            if (!lastViewedIndex) saveLastViewedIndex(c.selectedIndex);
            if (!selectedIndex) setSelectedIndex(c.selectedIndex);

            c.on('settle', () => {
              saveLastViewedIndex(c.selectedIndex);
              setSelectedIndex(c.selectedIndex);
            });
          }
        }}
      >
        {moviesList.map((movie) => (
          <MovieCard
            key={movie.slug}
            movie={movie}
          />
        ))}
      </Flickity>
      <Center textAlign="center">
        <Stack>
          <Text>
            Page {(selectedIndex ?? 0) + 1} of {moviesList.length}
          </Text>
          <Button
            size="xs"
            variant="subtle"
            onClick={() => {
              saveLastViewedIndex(0);
              window.location.reload();
            }}
          >
            Reset to Page 1
          </Button>
        </Stack>
      </Center>
    </Stack>
  );
};
