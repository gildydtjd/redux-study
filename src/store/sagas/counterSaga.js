import { delay, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { decrease, increase } from '../action/action';
import { DECREASE_ASYNC, INCREASE_ASYNC } from '../type/type';

function* increaseSaga() {
  console.log('increase_saga 실행');
  yield delay(1000);
  yield put(increase());
  console.log('increase_saga 종료');
}

function* decreaseSaga() {
  console.log('decrease_saga 실행');
  yield delay(1000);
  yield put(decrease());
  console.log('decrease_saga 종료');
}

function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

export default counterSaga;
