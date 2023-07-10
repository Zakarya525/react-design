import React, {useState} from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from '@mui/material';

const VerifyOTP = ({handleCloseModal}) => {
  const [otp, setOtp] = useState(new Array(4).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(otp.join(''));

    // Verify the entered OTP
    if (otp.join('') === '1234') {
      // If the OTP is correct, close the modal
      handleCloseModal();
    } else {
      // If the OTP is incorrect, show an error message
      alert('Incorrect OTP');
    }
  };

  return (
    <Dialog open={true} onClose={handleSubmit}>
      <DialogTitle>Enter OTP</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <div>
            {otp.map((data, index) => {
              return (
                <TextField
                  key={index}
                  type="text"
                  name="otp"
                  inputProps={{maxLength: 1}}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  autoFocus={index === 0}
                />
              );
            })}
          </div>
          <DialogActions>
            <Button type="submit">Verify OTP</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyOTP;
