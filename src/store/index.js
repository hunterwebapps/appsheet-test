import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import createReducer from './reducers';

const configureStore = (initialState = {}) => {
  const rootReducer = createReducer();
  
  const middlewares = [
    thunk,
  ];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    ),
  );

  return store;
};

export default configureStore;
