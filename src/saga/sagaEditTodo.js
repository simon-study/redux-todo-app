import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects'
import { ROOT_URL, EDIT_TODO, EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE } from '../constants/actionTypes';

export function* watcherEditSaga() {
  yield takeLatest(EDIT_TODO, workerEditSaga)
}

export function* workerEditSaga(action) {
  try {
    const response = yield axios({
      method: 'PUT',
      url: ROOT_URL + `${action.id}`,
      data: {
        text: action.text
      }
    })
    yield put({type: EDIT_TODO_SUCCESS, payload: response})
  } catch (error) {
    yield put({type: EDIT_TODO_FAILURE, payload: error})
  }
}