import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro/Intro';
import NotFound from './pages/Not-found/NotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Header from './components/Header/Header';
// import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path={'/*'} element={<NotFound />} />
        </Routes>
      </Router>
      {/* </Provider> */}
    </div>
  );
}

export default App;
