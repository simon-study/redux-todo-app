import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects'
import { ROOT_URL, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from '../constants/actionTypes';

export function* watcherAddSaga() {
  yield takeLatest(ADD_TODO, workerAddSaga)
}

export function* workerAddSaga(action) {
  try {
    const response = yield axios({
      method: 'POST',
      url: ROOT_URL,
      data: {
        text: action.text,
        completed: false
      }
    })
    yield put({type: ADD_TODO_SUCCESS, payload: response})
  } catch (error) {
    yield put({type: ADD_TODO_FAILURE, payload: error})
  }
}