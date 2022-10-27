import { createContext } from 'react';

interface UIContextProps {
  sideDrawerOpen: boolean;
  openSideDrawer: () => void;
  closeSideDrawer: () => void;
}

export const UIContext = createContext({} as UIContextProps);
