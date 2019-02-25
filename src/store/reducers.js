import { combineReducers } from 'redux';
import candidates from './candidates/reducer';

export default asyncReducers => {
  return combineReducers({
    candidates,
    ...asyncReducers,
  });
};
