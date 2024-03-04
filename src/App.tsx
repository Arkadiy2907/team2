import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Intro from './pages/Intro/Intro'
import NotFound from './pages/Not-found/NotFound'

import Header from './components/Header/Header'
import SignIn from './pages/authentication/SignIn/SignIn'
import SignUp from './pages/authentication/SignUp/SignUp'

import { useSelector } from 'react-redux'
import { AuthState } from './services/types'
// import { Provider } from 'react-redux'
// import store from './store/store'

function App() {
  const isLoggedIn = useSelector((state: AuthState) => state.isLoggedIn)
  const user = useSelector((state: AuthState) => state.user)

  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          {isLoggedIn && user ? (
            <>{user.login}</>
          ) : (
            <>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}

          <Route path={'/*'} element={<NotFound />} />
        </Routes>
      </Router>
      {/* </Provider> */}
    </div>
  )
}

export default App
