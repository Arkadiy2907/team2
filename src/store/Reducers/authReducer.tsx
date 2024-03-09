import { SET_IS_LOGGED } from '../Actions/ActionTypes';
import { IActionsLogged } from '../../services/types';

const defaultState = {
  isLogged: false,
};

export const authReducer = (state = defaultState, action: IActionsLogged) => {
  switch (action.type) {
    case SET_IS_LOGGED:
      return {
        isLogged: action.payload,
      };

    default:
      return state;
  }
};
