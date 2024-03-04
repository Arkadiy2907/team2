// store.ts
import { createStore } from 'redux'
import { AuthState, AuthAction } from '../services/types'

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
}

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, user: action.payload }
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, user: null }
    default:
      return state
  }
}

const store = createStore(authReducer)

export default store
