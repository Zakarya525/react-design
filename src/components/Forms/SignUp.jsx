import React, {Fragment, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate, Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerifyOTP from '../VerifyOTP';

import {
  Button,
  Stack,
  TextField,
  CssBaseline,
  Box,
  Typography,
  Modal,
} from '@mui/material';
import '../../App.css';
import {Grow} from '@material-ui/core';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const submitHandler = (data) => {
    console.log(data);
    setIsFormSubmitted(true);
    setOpen(true);
    localStorage.setItem('formData', JSON.stringify(data));
  };

  const handleCloseModal = () => {
    setOpen(false);
    navigate('/sidebar');
  };

  return (
    <Fragment>
      <Grow in={!isFormSubmitted}>
        <div id="body-content" className="container">
          <CssBaseline />
          <Box sx={{display: 'flex', p: 1}}>
            <form className="form" onSubmit={handleSubmit(submitHandler)}>
              <Modal open={open} onClose={handleCloseModal}>
                <div>
                  <VerifyOTP handleCloseModal={handleCloseModal} />
                </div>
              </Modal>
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
                type="name"
                id="outline-small-size"
                label="First Name"
                variant="outlined"
                margin="normal"
                size="small"
                {...register('firstname', {required: 'Please fill the field.'})}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.firstname?.message}
              </Typography>
              <TextField
                fullWidth
                aria-required={'true'}
                type="name"
                size="small"
                id="fullWidth"
                label="Last Name"
                variant="outlined"
                margin="normal"
                {...register('lastName', {required: 'Please fill the field.'})}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.lastName?.message}
              </Typography>
              <TextField
                fullWidth
                aria-required={'true'}
                type="name"
                size="small"
                id="fullWidth"
                label="Email Address"
                variant="outlined"
                margin="normal"
                {...register('email', {required: 'Please fill the field.'})}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.email?.message}
              </Typography>
              <TextField
                fullWidth
                aria-required={'true'}
                inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                size="small"
                id="fullWidth"
                label="Mobile Number"
                variant="outlined"
                margin="normal"
                {...register('number', {required: 'Please fill the field.'})}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.number?.message}
              </Typography>
              <TextField
                fullWidth
                aria-required={'true'}
                type="name"
                id="fullWidth"
                label="CNIC"
                size="small"
                variant="outlined"
                margin="normal"
                {...register('cnic', {required: 'Please fill the field.'})}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.cnic?.message}
              </Typography>

              <TextField
                fullWidth
                id="fullWidth"
                size="small"
                label="Password"
                type="password"
                autoComplete="current-password"
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
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                  mb: 5,
                }}>
                {errors.password?.message}
              </Typography>

              <Box sx={{display: 'flex'}}>
                <Button
                  type="submit"
                  size="small"
                  variant="contained"
                  sx={{m: '1rem'}}>
                  <input type="submit" hidden />
                  Register
                </Button>
                <Link to="/login">
                  <Button size="small" margin="normal" sx={{m: '1rem'}}>
                    Already have an Account
                  </Button>
                </Link>
              </Box>
            </form>
            <div className="img-info"></div>
          </Box>
        </div>
      </Grow>
      {isFormSubmitted && (
        <Modal open={open} onClose={handleCloseModal}>
          <div>
            <VerifyOTP handleCloseModal={handleCloseModal} />
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default SignUp;
