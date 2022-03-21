import {Alert} from '@material-ui/lab';
import {Snackbar} from '@material-ui/core';

function Notification(props) {
  const {notify, setNotify} = props;

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={1000}
      onClose={() => {
        setNotify(false);
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'top',
      }}>
      <Alert severity={notify.type}>{notify.message}</Alert>
    </Snackbar>
  );
}

export default Notification;
