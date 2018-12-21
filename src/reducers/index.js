import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({ 
  users: usersReducer,
  comments: commentsReducer
 });