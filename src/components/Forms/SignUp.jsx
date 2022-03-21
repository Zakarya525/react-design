import axios from 'axios';
import React, {Fragment, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  Button,
  Stack,
  TextField,
  Container,
  CssBaseline,
  Box,
  Fade,
  Alert,
  AlertTitle,
} from '@mui/material';
import '../../App.css';
import {Grow} from '@material-ui/core';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const resp = axios.post(
      'https://mobile-accessories.herokuapp.com/register',
      {username: username, email: email, password: password},
      (Headers = {headerkey: 'application/json'}),
    );

    console.log(resp);

    setPassword('');
    setUsername('');
    setEmail('');
  };

  return (
    <Fragment>
      <Grow in={open}>
        <div id="body-content" className="container">
          <CssBaseline />
          <Box sx={{display: 'flex', p: 1}}>
            <form className="form" onSubmit={submitHandler}>
              <Link to="/">
                <ArrowBackIcon
                  sx={{
                    color: '#1E90FF',
                    float: 'left',
                    ':hover': {
                      color: '#1976d2',
                    },
                  }}></ArrowBackIcon>
              </Link>
              <TextField
                fullWidth
                aria-required={'true'}
                id="fullWidth"
                label="Username"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                fullWidth
                id="fullWidth"
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                fullWidth
                id="fullWidth"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Stack direction="row">
                <Link to="/login">
                  <Button margin="normal" sx={{m: '1rem'}}>
                    Sign In
                  </Button>
                </Link>
                <Button
                  disabled={
                    username.length < 1 ||
                    password.length < 5 ||
                    email.length < 1
                  }
                  variant="contained"
                  onClick={submitHandler}
                  sx={{m: '1rem'}}>
                  Register
                </Button>
              </Stack>
            </form>
            <div className="img-info"></div>
          </Box>
        </div>
      </Grow>
    </Fragment>
  );
};

export default SignUp;
