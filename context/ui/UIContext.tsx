import { createContext } from 'react';

interface UIContextProps {
  sideDrawerOpen: boolean;
}

export const UIContext = createContext({} as UIContextProps);
