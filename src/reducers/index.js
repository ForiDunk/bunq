import { combineReducers } from 'redux';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import commentsReducer from './commentsReducer';
import conversationReducer from './conversationReducer';

export default combineReducers({ 
  users: usersReducer,
  comments: commentsReducer,
  currentUser: userReducer,
  conversation: conversationReducer
 });