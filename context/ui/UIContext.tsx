import { createContext } from 'react';

interface UIContextProps {
  sideDrawerOpen: boolean;
  openSideDrawer: () => void;
  closeSideDrawer: () => void;
  isAdding: boolean;
  setIsAddingEntry: (value: boolean) => void;
}

export const UIContext = createContext({} as UIContextProps);
