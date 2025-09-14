export type Movie = {
  id: number;
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
