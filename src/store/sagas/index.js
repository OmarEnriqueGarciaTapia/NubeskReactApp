import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { LOAD_TRIVIA, RENDER_TRIVIA } from '../actions';

export function* fetchLoadTrivia() {
  const apiPath = '/random'
  const endpoint = `https://jservice.io/api${apiPath}`;
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield delay(1500);
  yield put({ type: RENDER_TRIVIA, payload: data });
}

function* watchActions() {
  yield takeEvery(LOAD_TRIVIA, fetchLoadTrivia);
}

export default watchActions;
