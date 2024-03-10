import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import { thunk } from 'redux-thunk'
import { authReducer } from './Reducers/authReducer'
import favoritesReducer from './Reducers/favoritesReducer'
import { isSearchReducer } from './Reducers/isSearchReducer'

const rootReducer = combineReducers({
  isSearch: isSearchReducer,
  isLogged: authReducer,
  favoritesReducer: favoritesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
