import { Button, Center, Stack, Image, Text } from '@chakra-ui/react';
import { MovieCard } from '@/components/molecules/movie-card';
import { moviesList } from '@/lib/data';
import { type FC, useState } from 'react';

import type { Swiper as SwiperType } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { HashNavigation } from 'swiper/modules';
import 'swiper/swiper.css';

const defaultCarouselOptions = {
  centeredSlides: true,
  grabCursor: true,
  hashNavigation: true,
  lazy: 'true',
  modules: [HashNavigation],
  navigation: true,
  preloadImages: 'false',
  slidesPerView: 2,
  spaceBetween: 10,
};

export const Carousel: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentPage = (activeIndex ?? 0) + 1;
  const totalPages = moviesList.length;
  const firstMovieHref = `/#${moviesList[0].slug}`;

  return (
    <Stack mb="3">
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

      <Center textAlign="center">
        <Stack>
          <Text>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            size="xs"
            variant="subtle"
            onClick={() => {
              window.location.href = firstMovieHref;
              window.location.reload();
            }}
          >
            Reset to Page 1
          </Button>
        </Stack>
      </Center>

      <MovieCard movie={moviesList[activeIndex]} />
    </Stack>
  );
};
