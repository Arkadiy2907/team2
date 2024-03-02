import { SET_IS_SEARCH } from './ActionTypes';

export const postListAction = (payload: boolean) => ({
  type: SET_IS_SEARCH,
  payload,
});
