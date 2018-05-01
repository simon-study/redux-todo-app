import axios from 'axios';
import { fork, takeLatest, call, put } from 'redux-saga/effects'

function fetchTodos() {
  return axios({
    method: 'get',
    url: 'http://5adec2ccbf932f0014d11ad1.mockapi.io/api/v1/todos/'
  })
}

// watcher saga
export function* watcherSaga() {
  yield takeLatest('GET_TODOS', workerSaga);
}

// worker saga
function* workerSaga() {
  try {
    const response = yield call(fetchTodos);
    console.log(response);
    yield put({type: 'GET_TODO_SUCCESS', payload: response})
  } catch (error) {
    yield put({type: 'GET_TODO_ERROR', error})
  }
}

export function* rootSaga () {
  yield [
      fork(watcherSaga)
      // fork(saga2),
  ];
}