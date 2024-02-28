import React from 'react';
import { Link } from 'react-router-dom';
import { Container, IconButton, Typography, Button, Box } from '@mui/material';
import logo from '../../assets/logo.png';
import { wrap, wrapLogo } from './styles';

const Header = () => {
  const [isReg, setIsReg] = React.useState(true);

  return (
    <Container sx={{ ...wrap }}>
      <Box sx={{ ...wrapLogo }}>
        <IconButton
          sx={{
            mr: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          component={Link}
          to="/"
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: '4rem', height: '4rem' }}
          />
        </IconButton>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
          observer
        </Typography>
      </Box>
      {isReg ? (
        <Box>
          <Button component={Link} to="/favorites" color="inherit">
            Favorites
          </Button>
          <Button component={Link} to="/history" color="inherit">
            History
          </Button>
          <Button onClick={() => setIsReg(false)} color="inherit">
            SignOut
          </Button>
        </Box>
      ) : (
        <Box>
          <Button component={Link} to="/signin" color="inherit">
            SignIn
          </Button>
          <Button component={Link} to="/signup" color="inherit">
            SignUp
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Header;
