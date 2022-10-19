import {AnyAction} from "redux";
import {SET_GAME_RESULT, USER_LOGIN, USER_LOGOUT, USER_LOSE, USER_WIN} from "./actions/actionTypes";
import {UserStore} from "./duck/types";

const defaultState: UserStore = {
  balance: 1000,
  isLoggedIn: false,
  isLoading: false,
  gameData: {}
}

export default function  (state = defaultState, action: AnyAction) {
  switch (action.type) {
    case USER_WIN:
      return {...state, balance: state.balance + action.payload}
    case USER_LOSE:
      return {...state, balance: state.balance - action.payload}
    case USER_LOGIN:
      return {...state, isLoggedIn: true}
    case USER_LOGOUT:
      return {...state, isLoggedIn: false}
    case SET_GAME_RESULT:
      return {...state, gameData: {...state.gameData, ...action.payload}}
    default:
      return state
  }
}