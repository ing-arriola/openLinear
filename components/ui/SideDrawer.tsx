import { useContext } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from '../../context/ui/UIContext';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const SideDrawer = () => {
  const { sideDrawerOpen, closeSideDrawer } = useContext(UIContext);
  return (
    <Drawer anchor="left" open={sideDrawerOpen} onClose={closeSideDrawer}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((text, idx) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {idx % 2 ? <MoveToInboxOutlinedIcon /> : <EmailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
