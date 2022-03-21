import axios from 'axios';
import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button, Stack, TextField, CssBaseline, Grow, Box} from '@mui/material';

const AddStore = () => {
  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStoreName('');
    setDescription('');
  };

  return (
    <Fragment>
      <Grow in={open}>
        <div className="container" id="body-content" maxWidth="lg">
          <CssBaseline />

          <Box sx={{display: 'flex', p: 1}}>
            <form className="form">
              <Link to="/dashboard">
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
                label="Store Name"
                variant="outlined"
                value={storeName}
                margin="normal"
                onChange={(e) => setStoreName(e.target.value)}
              />
              <TextField
                fullWidth
                id="fullWidth"
                type="description"
                variant="outlined"
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value={description}
                margin="normal"
                onChange={(e) => setDescription(e.target.value)}
              />

              <Stack direction="row">
                <Button
                  variant="contained"
                  component="label"
                  margin="normal"
                  sx={{m: '1rem'}}>
                  <input
                    type="file"
                    name="file"
                    onChange={changeHandler}
                    hidden
                  />
                  Image
                </Button>

                <Button
                  disabled={description.length < 20 || storeName.length < 1}
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{m: '1rem'}}>
                  Add Store
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

export default AddStore;
