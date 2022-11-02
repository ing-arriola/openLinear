import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Todo:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto id unde, asperiores dolorum possimus laboriosam, eaque earum voluptas maxime, similique a magnam molestias fugiat inventore tenetur ducimus tempora! Minima, deserunt.',
      status: 'todo',
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'In Progress:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto id unde, asperiores dolorum possimus laboriosam, eaque earum voluptas maxime, similique a magnam molestias fugiat inventore tenetur ducimus tempora! Minima, deserunt.',
      status: 'in-progress',
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'Done:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto id unde, asperiores dolorum possimus laboriosam, eaque earum voluptas maxime, similique a magnam molestias fugiat inventore tenetur ducimus tempora! Minima, deserunt.',
      status: 'done',
      createAt: Date.now(),
    },
  ],
};

type Props = {
  children?: React.ReactNode;
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: 'todo',
    };
    dispatch({ type: '[Entry] Add-entry', payload: newEntry });
  };
  const updateEntry = (entryToUpdate: Entry) => {
    dispatch({ type: '[Entry] update-entry', payload: entryToUpdate });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
