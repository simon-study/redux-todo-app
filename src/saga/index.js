import { fork } from 'redux-saga/effects';
import { watcherAddSaga } from './sagaAddTodo';
import { watcherFetchSaga } from './sagaFetchTodos';
import { watcherDeleteTodo } from './sagaDeleteTodo';
import { watcherToggleSaga } from './sagaToggleTodo';
import { watcherEditSaga } from './sagaEditTodo';

export function* rootSaga () {
  yield [
    fork(watcherAddSaga),
    fork(watcherFetchSaga),
    fork(watcherToggleSaga),
    fork(watcherDeleteTodo),
    fork(watcherEditSaga)
  ];
}