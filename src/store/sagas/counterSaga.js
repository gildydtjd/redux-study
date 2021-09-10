import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { decrease, increase } from '../action/action';
import { DECREASE_ASYNC, INCREASE_ASYNC } from '../type/type';

function* increaseSaga() {
  console.log('increase_saga 실행');
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  console.log('decrease_saga 실행');
  yield delay(1000);
  yield put(decrease());
}

function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

export default counterSaga;
