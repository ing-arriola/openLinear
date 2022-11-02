import { DragEvent } from 'react';
import { List, Paper } from '@mui/material';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';
import styles from './EntryList.module.css';
interface EntryListProps {
  status: EntryStatus;
}

export const EntryList = ({ status }: EntryListProps) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, onDragEnded } = useContext(UIContext);
  const entriedByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    console.log(id);
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    const entry = entries.find((e) => e._id === id)!;
    entry.status = status;
    updateEntry(entry);
    onDragEnded();
  };

  return (
    <div
      className={isDragging ? styles.dragging : ''}
      onDrop={onDropEntry}
      onDragOver={allowDrop}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'scroll',
          background: 'transparent',
          padding: '1px 5px',
        }}
      >
        <List sx={{ opacity: isDragging ? 0 : 1 }}>
          {entriedByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
