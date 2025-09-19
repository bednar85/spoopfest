export type Movie = {
  slug: string;
  title: string;
  year: number;
  url: string;
  posterSrc: {
    small: string;
    medium: string;
  };
  primaryLanguage: string;
  description: string;
  subgenres: string[];
};

export type SlimMovie = {
  displayText: string;
  interestRating: number;
  slug: string;
};

export type InterestTracker = Record<string, SlimMovie>;
