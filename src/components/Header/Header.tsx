import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isSearchAction, isLoggedAction } from '../../store/Actions/Action';
import {
  Container,
  IconButton,
  Typography,
  Button,
  Box,
  Avatar,
} from '@mui/material';
import logo from '../../assets/logo.png';
import { IRootStateLogged } from '../../services/types';
import { wrap, wrapLogo } from './styles';

const Header = () => {
  const logged = useSelector(
    (state: IRootStateLogged) => state.isLogged.isLogged
  );

  const [isReg, setIsReg] = React.useState(logged);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsReg(logged);
  }, [logged]);

  const handleClickSignOut = () => {
    setIsReg(false);
    dispatch(isSearchAction(false));
    dispatch(isLoggedAction(false));
  };

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
          onClick={() => dispatch(isSearchAction(false))}
        >
          <Avatar
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
          <Button onClick={handleClickSignOut} color="inherit">
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
