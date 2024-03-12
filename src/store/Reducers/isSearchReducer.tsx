import { SET_IS_SEARCH } from '../Actions/ActionTypes';
import { IActionsSearch } from '../../services/types';

const defaultState = {
  isSearch: false,
};

export const isSearchReducer = (
  state = defaultState,
  action: IActionsSearch
) => {
  switch (action.type) {
    case SET_IS_SEARCH:
      return {
        isSearch: action.payload,
      };

    default:
      return state;
  }
};
