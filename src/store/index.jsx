import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { isSearchReducer } from './Reducers/isSearchReducer';
import { authReducer } from './Reducers/authReducer';

const rootReducer = combineReducers({
  isSearch: isSearchReducer,
  isLogged: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
