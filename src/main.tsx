import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalContextProvider } from './contexts/global/provider';
import { ChakraUiProvider } from './contexts/chakra-ui/provider';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraUiProvider>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </ChakraUiProvider>
  </StrictMode>,
);
