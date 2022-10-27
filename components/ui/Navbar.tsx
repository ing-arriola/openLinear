import { useContext } from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui/UIContext';

export const Navbar = () => {
  const { openSideDrawer } = useContext(UIContext);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={openSideDrawer}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">Dynamic Tasks</Typography>
      </Toolbar>
    </AppBar>
  );
};
