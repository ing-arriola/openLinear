import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { ChangeEvent, useState, useContext } from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Box, Button, TextField } from '@mui/material';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const [inputValue, setinputValue] = useState('');
  const [touched, settouched] = useState(false);
  const { addNewEntry } = useContext(EntriesContext);
  const { isAdding, setIsAddingEntry } = useContext(UIContext);
  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinputValue(event.target.value);
  };
  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    settouched(false);
    setinputValue('');
  };
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            autoFocus
            multiline
            label="New entry"
            helperText={inputValue.length <= 0 && touched && 'Enter a new task'}
            error={inputValue.length <= 0 && touched}
            onChange={onTextFieldChange}
            value={inputValue}
            onBlur={() => settouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              onClick={() => setIsAddingEntry(false)}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          onClick={() => setIsAddingEntry(true)}
          startIcon={<AddBoxOutlinedIcon />}
          fullWidth
          variant="outlined"
        >
          Add task
        </Button>
      )}
    </Box>
  );
};
