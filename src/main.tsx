import { Provider } from '@/components/ui/provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalContextProvider } from './contexts/global/provider.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </Provider>
  </StrictMode>,
);
