import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { isSearchReducer } from './Reducers/isSearchReducer';

const rootReducer = combineReducers({
  isSearch: isSearchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
