import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootSaga,rootReducer} from './root'





export default function configureStore(initialState = {}) {
  // Create the store with thunk middleware
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware];

  const enhancers = [
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ];

  const store = createStore(
      rootReducer(),
      initialState,
      compose(...enhancers),

  );

  sagaMiddleware.run(rootSaga)

  // Initialize it with no other reducers
  store.asyncReducers = {};
  return store;
}
