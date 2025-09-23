import type { Swiper as SwiperType } from 'swiper';

import { InterestSlider } from '@/components/molecules/interest-slider';
import { MovieCard } from '@/components/molecules/movie-card';
import { moviesList } from '@/lib/data';
import { Box, Button, Flex, Group, Image, Stack, Text } from '@chakra-ui/react';
import { type FC, useState } from 'react';
import { HashNavigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.css';

const defaultCarouselOptions = {
  centeredSlides: true,
  grabCursor: true,
  hashNavigation: true,
  lazy: 'true',
  modules: [HashNavigation],
  navigation: true,
  preloadImages: 'false',
  slidesPerView: 1.66,
};

export const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentPage = (activeIndex ?? 0) + 1;
  const totalPages = moviesList.length;
  const firstMovieHref = `/#${moviesList[0].slug}`;

  return (
    <Stack
      backgroundColor="#00777d"
      gap="0"
      mb="3"
    >
      <Box mb="3">
        <Swiper
          className="carousel"
          {...defaultCarouselOptions}
          onSlideChange={(swiper: SwiperType) =>
            setActiveIndex(swiper.activeIndex)
          }
        >
          {moviesList.map((movie) => (
            <SwiperSlide
              className="carousel-cell"
              key={movie.slug}
              data-hash={movie.slug}
            >
              <Image
                className="swiper-lazy"
                src={movie.posterSrc.medium}
                alt={movie.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Flex
        alignContent="center"
        justifyContent="space-between"
        px="7"
        mb="3"
      >
        <InterestSlider movieSlug={moviesList[activeIndex].slug} />
        <Group>
          <Text
            textStyle="sm"
            color="#BDD0A0"
          >
            {currentPage} of {totalPages}
          </Text>
          <Button
            size="xs"
            variant="solid"
            colorPalette="teal"
            onClick={() => {
              window.location.href = firstMovieHref;
              window.location.reload();
            }}
          >
            Reset to 1
          </Button>
        </Group>
      </Flex>
      <MovieCard movie={moviesList[activeIndex]} />
    </Stack>
  );
};
