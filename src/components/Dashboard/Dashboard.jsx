import UserItem from './UserItem';
import Image from '../images/zakaryakhan525.jpg';
import Navbar from '../Navbar';
import {Fragment, useEffect} from 'react';
import {Grid} from '@mui/material';
import {Box} from '@mui/system';
import AddNew from './AddNew';
import {useLocation} from 'react-router-dom';

const Dashboard = () => {
  useEffect(() => {
    document.body.style.background = '#f4f4f4';
  });

  let {state} = useLocation();
  if (state == null) {
    state = {value: 'Store'};
    console.log(state.value);
  }

  return (
    <Fragment>
      <Navbar />

      <Box
        sx={{
          p: 2,
          display: 'grid',
          gridTemplateColumns: '2fr 5fr',
          gridGap: '4rem',
        }}>
        <Grid item>
          <UserItem
            id="1"
            login="zakaryakhan525"
            avatar_url={Image}
            about="Hi, I am React Developer."
          />
        </Grid>

        {state.value == 'Products' ? (
          <div container className="grid1">
            <AddNew text="Add New Product" path="/AddProduct" />
          </div>
        ) : state.value == 'Store' ? (
          <Grid container>
            <AddNew text="Add Your New Store" path="/AddStore" />
          </Grid>
        ) : (
          <h1>This is the Big Error</h1>
        )}
      </Box>
    </Fragment>
  );
};

export default Dashboard;
