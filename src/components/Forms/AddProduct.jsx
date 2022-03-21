import axios from 'axios';
import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Button, Stack, TextField, CssBaseline, Grow, Box} from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      'https://5764-37-111-134-98.ngrok.io/AddProduct',
      {product: product, description: description},
      (Headers = {headerkey: 'application/json'}),
    );
    setProduct('');
    setDescription('');
  };

  return (
    <Grow in={open}>
      <form onSubmit={handleSubmit}>
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
          label="Product Name"
          variant="outlined"
          value={product}
          margin="normal"
          onChange={(e) => setProduct(e.target.value)}
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
            <input type="file" name="file" onChange={changeHandler} hidden />
            Image
          </Button>

          <Button
            disabled={description.length < 20 || product.length < 1}
            variant="contained"
            sx={{m: '1rem'}}>
            Add Product
          </Button>
        </Stack>
      </form>
    </Grow>
  );
};

export default AddProduct;
