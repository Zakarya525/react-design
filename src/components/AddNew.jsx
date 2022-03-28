import {CardContent, Typography} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Link} from 'react-router-dom';
const AddNew = ({path, text, token}) => {
  return (
    <CardContent
      sx={{
        height: '170px',
        borderRadius: '10px',
        textAlign: 'center',
      }}>
      <Link to={path} state={{value: text, accessToken: token}}>
        <AddCircleOutlineIcon sx={{fontSize: 50}} />
        <Typography
          textAlign="center"
          gutterBottom
          variant="h6"
          component="div">
          <span className="text-dark text-italic"> Click&nbsp;Here</span>{' '}
          <br></br> To add new {text}
        </Typography>
      </Link>
    </CardContent>
  );
};

export default AddNew;
