import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import postListReducer from './post-list-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPostList: postListReducer
});

export default rootReducer;