import postsReducer from './postsReducer';
import filteredReducer from './filteredReduser';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postsReducer,
  filteredReducer,
});

export default rootReducer;
