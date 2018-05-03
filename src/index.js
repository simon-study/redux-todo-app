import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware , createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootSaga } from './saga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);
