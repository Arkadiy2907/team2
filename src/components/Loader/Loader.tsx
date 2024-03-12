import { Container, Typography, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CircularProgress />
      <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
        Loading...
      </Typography>
    </Container>
  );
};

export default Loader;
