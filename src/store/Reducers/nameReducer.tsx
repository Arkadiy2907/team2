import { SET_NAME } from '../Actions/ActionTypes'
import { IActionsName } from '../../services/types'

const defaultState = {
  isLogged: '',
}

export const nameReducer = (state = defaultState, action: IActionsName) => {
  switch (action.type) {
    case SET_NAME:
      return {
        named: action.payload,
      }

    default:
      return state
  }
}
