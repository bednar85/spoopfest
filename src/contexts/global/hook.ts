import { useContext } from 'react';
import { GlobalContext } from './context.ts';

export const useGlobalContext = () => useContext(GlobalContext);
