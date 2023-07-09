import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import Dashboard from './Dashboard';
import ProfileSetting from './ProfileSetting';
import ChangePassword from './ChangePassword';

const drawerWidth = 240;

export default function SideBar() {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left">
        <Toolbar />
        <List>
          {[
            {text: 'Dashboard', icon: <DashboardIcon />},
            {text: 'Profile Setting', icon: <SettingsIcon />},
            {text: 'Change Password', icon: <LockIcon />},
          ].map(({text, icon}, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  setSelectedItem(text);
                }}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}>
        {selectedItem === 'Dashboard' && <Dashboard />}
        {selectedItem === 'Profile Setting' && <ProfileSetting />}
        {selectedItem === 'Change Password' && <ChangePassword />}
      </Box>
    </Box>
  );
}
