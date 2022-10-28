import { List, Paper } from '@mui/material';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';

interface EntryListProps {
  status: EntryStatus;
}

export const EntryList = ({ status }: EntryListProps) => {
  const { entries } = useContext(EntriesContext);

  const entriedByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  );

  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 250px)',
          overflow: 'scroll',
          background: 'transparent',
          padding: '1px 5px',
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriedByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
