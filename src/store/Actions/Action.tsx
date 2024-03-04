import { SET_IS_SEARCH, SET_IS_LOGGED } from './ActionTypes';

export const isSearchAction = (payload: boolean) => ({
  type: SET_IS_SEARCH,
  payload,
});

export const isLoggedAction = (payload: boolean) => ({
  type: SET_IS_LOGGED,
  payload,
});
