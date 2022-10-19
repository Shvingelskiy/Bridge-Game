import {applyMiddleware, createStore, combineReducers} from "redux"
import userReducer from "./userReducer";
import createSagaMiddleware from "redux-saga"
import {gameWatcher} from "./userSaga";
import {ReducerStore} from "./duck/types";

const middleware = createSagaMiddleware();

const rootReducer = combineReducers<ReducerStore>({
  userStore: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(middleware))

middleware.run(gameWatcher)