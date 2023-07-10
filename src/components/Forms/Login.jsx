import React, {Fragment, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Box, Button, CssBaseline, TextField, Typography} from '@mui/material';
import {Grow} from '@material-ui/core';
import VerifyOTP from '../VerifyOTP';

export const Login = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [open, setOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleClick = async (data) => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    console.log(data);
    console.log(storedData);

    if (storedData) {
      if (
        data.username === storedData.email &&
        data.password === storedData.password
      ) {
        setOpen(true);
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('No user data found');
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
    navigate('/sidebar');
  };

  return (
    <Fragment>
      <Grow in={true}>
        <div className="container" id="body-content" maxwidth="lg">
          <CssBaseline />

          <Box sx={{display: 'flex', p: 1}}>
            <form className="form" onSubmit={handleSubmit(handleClick)}>
              <CssBaseline />
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
                margin="normal"
                {...register('username', {required: 'Please fill the field.'})}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.username?.message}
              </Typography>
              <TextField
                fullWidth
                id="fullWidth"
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
                {...register('password', {
                  required: 'Please fill the field.',
                  minLength: {
                    value: 8,
                    message: 'Min length is 8',
                  },
                })}
              />
              <Typography
                variant="body6"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.password?.message}
              </Typography>

              <Box sx={{display: 'flex'}}>
                <Link to="/">
                  <Button size="small" sx={{m: '1rem'}}>
                    Don't have an Account
                  </Button>
                </Link>

                <Button size="small" type="submit" variant="contained">
                  Sign In
                </Button>
              </Box>
            </form>
            <div className="img-info"></div>
          </Box>
        </div>
      </Grow>

      {open && <VerifyOTP handleCloseModal={handleCloseModal} />}
    </Fragment>
  );
};

export default Login;
