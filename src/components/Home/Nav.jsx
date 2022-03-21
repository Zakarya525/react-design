import * as React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#444',
        color: '#fff',
        mb: 10,
        opacity: 0.8,
      }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{mr: 2}}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          MPH
        </Typography>

        <Button color="inherit">
          <Link to="/login" className="btn-navbar">
            LOGIN
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/signup" className="btn-navbar">
            SIGN UP
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
