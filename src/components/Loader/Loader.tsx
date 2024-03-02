import React from 'react';
import loader from '../../assets/loader.gif';
import { Container, Avatar, Typography } from '@mui/material';

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
      <Avatar
        src={loader}
        alt="loader"
        style={{ width: '13rem', height: '13rem' }}
      />
      <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
        Loading...
      </Typography>
    </Container>
  );
};

export default Loader;
