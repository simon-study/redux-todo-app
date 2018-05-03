import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects'
import { ROOT_URL } from '../constants/actionTypes';
import { FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../constants/actionTypes';

export function* watcherFetchSaga() {
  yield takeLatest(FETCH_TODOS, workerFetchSaga);
}

export function* workerFetchSaga() {
  try {
    const response = yield axios({
      method: 'GET',
      url: ROOT_URL
    })

    if (response.status === 200) {
      yield put({type: FETCH_TODOS_SUCCESS, payload: response})
    }
  } catch (error) {
    yield put({type: FETCH_TODOS_FAILURE, error})
  }
}