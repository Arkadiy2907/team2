import { SET_IS_SEARCH, SET_IS_LOGGED, SET_NAME } from './ActionTypes'

export const isSearchAction = (payload: boolean) => ({
  type: SET_IS_SEARCH,
  payload,
})

export const isLoggedAction = (payload: boolean) => ({
  type: SET_IS_LOGGED,
  payload,
})

export const setNameAction = (payload: string) => ({
  type: SET_NAME,
  payload,
})
