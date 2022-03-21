import UserItem from './UserItem';
import Navbar from '../Navbar';
import {Fragment, useEffect, useState} from 'react';
import {Grid} from '@mui/material';
import {Box} from '@mui/system';
import AddNew from './AddNew';
import {useLocation} from 'react-router-dom';
import Image from '../images/admin.jpg';

const Dashboard = () => {
  let {state} = useLocation();
  console.log(state);

  useEffect(() => {
    const getData = async () => {
      const userFromBackend = await getUser();
    };

    getData();

    document.body.style.background = '#f4f4f4';
  }, []);

  const getUser = async () => {
    const res = await fetch(`https://mph-backend.herokuapp.com/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${state.token}`,
      },
    });

    const user = await res.json();
    return user;
  };

  const {username, email} = state.user;

  return (
    <Fragment>
      <Navbar
        image="1"
        username="assalam"
        email="assalam@gmail"
        avatar_url={Image}
      />

      <section className="dashboard-container">
        <Grid item>
          <UserItem username={username} email={email} avatar_url={Image} />
        </Grid>

        {state == 'Products' ? (
          <div className="grid1">
            <AddNew text="Product" path="/AddProduct" />
          </div>
        ) : (
          <div className="grid1">
            <AddNew text="Store" token={state.token} path="/AddStore" />
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Dashboard;
