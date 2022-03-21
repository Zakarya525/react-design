import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Button, Box, Typography} from '@mui/material';
import '../../App.css';

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <div>
          <Typography
            variant="h1"
            gutterBottom
            component="div"
            sx={{
              color: '#ccc',
              textShadow: '10px 10px 8px #001',
            }}>
            Mardan Paira House
          </Typography>
          <Typography
            color={'white'}
            variant="body2"
            sx={{fontSize: '1.3rem'}}
            gutterBottom>
            Paira is an Mardan dessert of fried dough balls that are soaked in a
            sweet, sticky sugar syrup. As per tradition, the syrup has a
            delicate rose flavour: Gulab means 'rose water' and jamun refers to
            a berry of a similar size and colour.
          </Typography>
        </div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'bottom',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            margin: '1rem',
          }}>
          <Link to="/login" className="btn btn-dark">
            Login
          </Link>
          <Link to="/signup" className="btn btn-dark">
            Sign Up
          </Link>
        </Box>
      </div>
    </Fragment>
  );
};

export default Home;
