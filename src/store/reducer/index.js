import { combineReducers } from 'redux';
import counterSaga from '../sagas/counterSaga';
import counter from './counter';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ counter });

export function* rootSaga() {
  yield all([counterSaga]);
}

export default rootReducer;
