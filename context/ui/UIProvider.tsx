import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideDrawerOpen: boolean;
  isAdding: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideDrawerOpen: false,
  isAdding: false,
};

type Props = {
  children?: React.ReactNode;
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideDrawer = () => {
    dispatch({ type: 'UI-Open-SideDrawer' });
  };

  const closeSideDrawer = () => {
    dispatch({ type: 'UI-Close-SideDrawer' });
  };

  const setIsAddingEntry = (value: boolean) => {
    dispatch({ type: 'UI-Set-IsAddingEntry', payload: value });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideDrawer,
        closeSideDrawer,
        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
