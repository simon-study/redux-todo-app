import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects'
import { ROOT_URL } from '../constants/actionTypes';
import { TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE } from '../constants/actionTypes';

export function* watcherToggleSaga() {
  yield takeLatest('TOGGLE_TODO', workerToggleSaga);
}

export function* workerToggleSaga(action) {
  try {
    const response = yield axios({
      method: 'PUT',
      url: ROOT_URL + `${action.todo.id}`,
      data: {
        completed: !action.todo.completed
      }
    })
    
    if (response.status === 200) {
      yield put({type: TOGGLE_TODO_SUCCESS, payload: response})
    }
  } catch (error) {
    yield put({type: TOGGLE_TODO_FAILURE, payload: error})
  }
}