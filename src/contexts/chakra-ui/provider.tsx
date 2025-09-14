import { type FC, type ReactNode } from 'react';
import { ChakraProvider, defaultSystem, Theme } from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
};

export const ChakraUiProvider: FC<Props> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Theme appearance="light">{children}</Theme>
    </ChakraProvider>
  );
};
