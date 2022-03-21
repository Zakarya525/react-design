import React, {Fragment} from 'react';
import {Typography} from '@mui/material';

const AlertCom = ({count, color, warningValue}) => {
  return (
    <Fragment>
      {count && (
        <Typography variant="h6" color={color} gutterBottom>
          {warningValue}
        </Typography>
      )}
    </Fragment>
  );
};

export default AlertCom;
