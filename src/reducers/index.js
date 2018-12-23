import { combineReducers } from 'redux';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import commentsReducer from './commentsReducer';
import conversationReducer from './conversationReducer';
import conversationsReducer from './conversationsReducer';
import messageReducer from './messageReducer';

export default combineReducers({ 
  users: usersReducer,
  selectedUser: userReducer,
  conversations: conversationsReducer,
  selectedConversation: conversationReducer,
  comments: commentsReducer,
  lastMessage: messageReducer
 });