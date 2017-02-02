import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import words from './words';

export default combineReducers({
  routing,
  words
});
