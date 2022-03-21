import React, {Component, Fragment} from 'react';
import {CssBaseline, Container, Typography} from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export class Error extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            mt="7rem"
            align="center"
            gutterBottom
            component="div">
            Opps <SentimentVeryDissatisfiedIcon fontSize="100%" />, Page not
            Found.
          </Typography>
        </Container>
      </Fragment>
    );
  }
}

export default Error;
