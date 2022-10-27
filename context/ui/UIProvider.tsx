import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideDrawerOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideDrawerOpen: false,
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

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideDrawer,
        closeSideDrawer,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
