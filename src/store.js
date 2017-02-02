import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from './reducers/index';

/**
 * Entirely optional.
 * This tiny library adds some functionality to your DevTools,
 * by logging actions/state to your console. Used in conjunction
 * with your standard DevTools monitor gives you great flexibility.
 */
const logger = createLogger();

const middlewares = [promiseMiddleware, logger, require('redux-immutable-state-invariant')()];

const enhancer = compose(
  applyMiddleware(...middlewares)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Enable hot module replacement for reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
