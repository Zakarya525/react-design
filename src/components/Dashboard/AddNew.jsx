import {CardContent, Typography} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Link} from 'react-router-dom';
const AddNew = ({text, path}) => {
  return (
    <CardContent
      sx={{
        pt: 4,
        border: '1px solid #ccc',
        height: '200px',
        borderRadius: '10px',
        textAlign: 'center',
      }}>
      <Link to={path}>
        <AddCircleOutlineIcon sx={{fontSize: 50}} />
        <Typography
          textAlign="center"
          gutterBottom
          variant="h6"
          component="div">
          {text}
        </Typography>
      </Link>
    </CardContent>
  );
};

export default AddNew;
