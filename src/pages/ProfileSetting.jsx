import React, {useState} from 'react';
import {Box, Button, Tab, Tabs, TextField, Typography} from '@mui/material';

const ProfileSetting = () => {
  const [value, setValue] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSaveClick = () => {
    console.log(cardNumber, expirationDate, cvv);
    // i will be adding thirdparty library for credit card mach
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Profile Setting
      </Typography>
      <Box sx={{width: '100%'}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Profile Settings" />
            <Tab label="Credit Card Details" />
          </Tabs>
        </Box>
        {value === 0 && (
          <Box sx={{p: 3}}>
            <TextField label="First Name" fullWidth margin="normal" />
            <TextField label="Last Name" fullWidth margin="normal" />
            <TextField label="Email" fullWidth margin="normal" />
          </Box>
        )}
        {value === 1 && (
          <Box sx={{p: 3}}>
            <TextField
              label="Card Number"
              fullWidth
              margin="normal"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            <TextField
              label="Expiration Date"
              fullWidth
              margin="normal"
              value={expirationDate}
              onChange={handleExpirationDateChange}
            />
            <TextField
              label="CVV"
              fullWidth
              margin="normal"
              value={cvv}
              onChange={handleCvvChange}
            />
          </Box>
        )}

        <Box sx={{p: 3}}>
          <Button variant="contained" onClick={handleSaveClick}>
            Save
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ProfileSetting;
