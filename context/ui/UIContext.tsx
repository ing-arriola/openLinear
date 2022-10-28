import { createContext } from 'react';

interface UIContextProps {
  sideDrawerOpen: boolean;
  isAdding: boolean;
  isDragging: boolean;
  openSideDrawer: () => void;
  closeSideDrawer: () => void;
  setIsAddingEntry: (value: boolean) => void;
  onDragStated: () => void;
  onDragEnded: () => void;
}

export const UIContext = createContext({} as UIContextProps);
