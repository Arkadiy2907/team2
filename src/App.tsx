import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/Not-found/NotFound';
import SignIn from './pages/authentication/SignIn/SignIn';
import SignUp from './pages/authentication/SignUp/SignUp';
import Header from './components/Header/Header';
import Favorites from './pages/Favorites/Favorites';
import History from './pages/History/History';
import Search from './pages/Search/Search';
import { Provider } from 'react-redux';
import { store } from './store';
import { Container } from '@mui/material';

function App() {
  return (
    <Container sx={{ ...styleApp }}>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
            <Route path={'/*'} element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </Container>
  );
}

export default App;

const styleApp = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minHeight: '100vh',
  overflowY: 'hidden',
};
