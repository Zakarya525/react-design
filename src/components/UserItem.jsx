import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

export const UserItem = ({username, email, avatar_url}) => {
  return (
    <Card sx={{maxwidth: 345}}>
      <CardMedia
        sx={{
          width: '200px',
          borderRadius: '50%',
          p: 1,
          m: 'auto',
        }}
        component="img"
        height="200"
        borderradius="50%"
        image={avatar_url}
        alt={username}
      />
      <CardContent>
        <Typography
          textAlign="center"
          gutterBottom
          variant="h5"
          component="div">
          {username}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
};

export default UserItem;
