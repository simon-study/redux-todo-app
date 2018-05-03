import axios from 'axios';
import { takeLatest, takeEvery, put } from 'redux-saga/effects'
import { ROOT_URL } from '../constants/actionTypes';
import { DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE } from '../constants/actionTypes';

export function* watcherDeleteTodo() {
  yield takeEvery('DELETE_TODO', workerDeleteTodo)
}

export function* workerDeleteTodo(action) {
  try {
    const response = yield axios({
      method: 'DELETE',
      url: ROOT_URL + `${action.todo.id}`
    })

    if (response.status === 200) {
      yield put({type: DELETE_TODO_SUCCESS, payload: response})
      // isCalled = false;
    } else {
      console.log(response);
      throw response;
    }
  } catch (error) {
    yield put({type: DELETE_TODO_FAILURE, payload: error})
  }
}