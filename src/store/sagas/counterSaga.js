import React from 'react';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { decrease, increase } from '../action/action';
import { DECREASE_ASYNC, INCREASE_ASYNC } from '../type/type';

function* counterSaga(props) {
  function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
  }
  function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
  }

  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

export default counterSaga;
