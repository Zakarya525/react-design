import axios from 'axios';
import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button, Stack, TextField, CssBaseline, Box} from '@mui/material';
import {Grow} from '@material-ui/core';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const respone = axios.post(
      'https://mobile-accessories.herokuapp.com/login',
      {username: username, password: password},
      (Headers = {headerkey: 'application/json'}),
    );

    console.log(respone);
    setUsername('');
    setPassword('');
  };

  return (
    <Fragment>
      <Grow in={open}>
        <div className="container" id="body-content" maxWidth="lg">
          <CssBaseline />

          <Box sx={{display: 'flex', p: 1}}>
            <form className="form" onSubmit={handleSubmit}>
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
                id="fullWidth"
                label="Username"
                variant="outlined"
                value={username}
                margin="normal"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                fullWidth
                id="fullWidth"
                type="password"
                label="Password"
                variant="outlined"
                value={password}
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <Stack direction="row">
                <Link to="/SignUp">
                  <Button margin="normal" sx={{m: '1rem'}}>
                    Register
                  </Button>
                </Link>

                <Button
                  disabled={username.length < 1 || password.length < 5}
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{m: '1rem'}}>
                  Sign In
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

export default Login;
