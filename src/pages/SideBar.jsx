import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;

export default function SideBar() {
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve the username from local storage
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setUsername(storedData.firstname);
    }
  }, []);

  const handleLogout = () => {
    window.location.href = '/login';
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#8884d8'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Welcome, {username}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
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
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Toolbar />
        {selectedItem === 'Dashboard' && <Dashboard />}
        {selectedItem === 'Profile Setting' && <ProfileSetting />}
        {selectedItem === 'Change Password' && <ChangePassword />}
      </Box>
    </Box>
  );
}
