import { DragEvent, useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui/UIContext';

interface EntryCardProps {
  entry: Entry;
}

export const EntryCard = ({ entry }: EntryCardProps) => {
  const { onDragStated, onDragEnded } = useContext(UIContext);
  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    //modify state to say that I'm currently dragginn
    event.dataTransfer.setData('text', entry._id);
    onDragStated();
  };
  const onDragEnd = () => {
    onDragEnded();
  };
  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Typography variant="body2">30 minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
