import { combineReducers } from 'redux';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import commentsReducer from './commentsReducer';
import conversationReducer from './conversationReducer';
import conversationsReducer from './conversationsReducer';

export default combineReducers({ 
  users: usersReducer,
  selectedUser: userReducer,
  conversations: conversationsReducer,
  selectedConversation: conversationReducer,
  comments: commentsReducer
 });