import {put, takeEvery, call, takeLatest} from "redux-saga/effects"
import {
  setGameResultAction,
  userLoginAction,
  userLogoutAction,
  userLoseAction,
  userWinAction
} from "./actions/actions";
import {START_GAME, USER_LOGIN_ASYNC, USER_LOGOUT_ASYNC} from "./actions/actionTypes";
import * as api from "../api"
import {CardsData, ShuffleData} from "./duck/types";
import {AnyAction} from "redux";
import {BET_NUM, CARD_ARRAY} from "./duck/constants";

function* gameWorker(action: AnyAction) {
  try {
    const result: ShuffleData = yield call(api.shuffleCards)
    const data: CardsData = yield call(() => api.getCards(result.deck_id))

    const selectedCard = data.cards[action.payload]
    const anotherCard = data.cards[action.payload ? 0 : 1]

    let isWin = false

    if (CARD_ARRAY.indexOf(selectedCard.value) > CARD_ARRAY.indexOf(anotherCard.value)) {
      isWin = true
    }

    yield put(setGameResultAction({
      srcImg1: data.cards[0].image,
      srcImg2: data.cards[1].image,
      isWin
    }))

    yield put(isWin ? userWinAction(BET_NUM) : userLoseAction(BET_NUM))
  } catch (e) {

  }
}

// imitation auth and setting jwt tokens
function* loginWorker() {
  localStorage.setItem("isLoggedIn", "true");
  yield put(userLoginAction())
}

function* logoutWorker() {
  localStorage.removeItem("isLoggedIn");
  yield put(userLogoutAction())
}

export function* gameWatcher() {
  yield takeLatest(START_GAME, gameWorker)
  yield takeEvery(USER_LOGIN_ASYNC, loginWorker)
  yield takeEvery(USER_LOGOUT_ASYNC, logoutWorker)
}