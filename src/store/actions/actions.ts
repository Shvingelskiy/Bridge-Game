import {
  START_GAME,
  USER_LOGIN,
  USER_LOGIN_ASYNC,
  USER_LOGOUT,
  USER_LOGOUT_ASYNC,
  USER_LOSE,
  USER_WIN,
  SET_GAME_RESULT
} from "./actionTypes";
import {GameData} from "../duck/types";

export const userWinAction = (payload: number) => ({type: USER_WIN, payload})
export const userLoseAction = (payload: number) => ({type: USER_LOSE, payload})
export const startGameAction = (payload: number) => ({type: START_GAME, payload})
export const userLoginAction = () => ({type: USER_LOGIN})
export const userLogoutAction = () => ({type: USER_LOGOUT})
export const userLoginAsyncAction = () => ({type: USER_LOGIN_ASYNC})
export const userLogoutAsyncAction = () => ({type: USER_LOGOUT_ASYNC})
export const setGameResultAction = (payload: GameData) => ({type: SET_GAME_RESULT, payload})