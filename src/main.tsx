import { Provider } from '@/components/ui/provider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { VotingContextProvider } from './contexts/voting/provider.tsx';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <VotingContextProvider>
        <App />
      </VotingContextProvider>
    </Provider>
  </StrictMode>,
)
