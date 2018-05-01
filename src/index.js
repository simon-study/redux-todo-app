import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware , createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import { rootSaga } from './saga/saga';
import rootReducer from './reducers'

// const middleware = applyMiddleware(promise(), thunk, logger);
const sagaMiddleware = createSagaMiddleware();
// const middleware = applyMiddleware(sagaMiddleware)
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);
