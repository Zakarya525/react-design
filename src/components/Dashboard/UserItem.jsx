import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

export const UserItem = (props) => {
  const {login, avatar_url, about} = props;

  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia
        sx={{
          width: '200px',
          borderRadius: '50%',
          p: 1,
          m: 'auto',
        }}
        component="img"
        height="200"
        borderRadius="50%"
        image={avatar_url}
        alt={login}
      />
      <CardContent>
        <Typography
          textAlign="center"
          gutterBottom
          variant="h5"
          component="div">
          {login}
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          {about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Profile</Button>
      </CardActions>
    </Card>
  );
};

export default UserItem;
