import bunq from '../api/bunq';

export const selectUser = (user) => {
  return {
    type: 'SELECT_USER',
    payload: user
  };
};

export const getUsers = () => async dispatch => {
  const users = await bunq.get('/users');
  dispatch({ 
    type: 'GET_USERS', 
    payload: users.data 
  });
};

export const getComments = (conversationId, lastMessageId) => async dispatch => {
  const comments = await bunq.get(`/conversation/${conversationId}/new/${lastMessageId}`);
  dispatch({ 
    type: 'GET_COMMENTS', 
    payload: comments.data 
  });
} 

export const selectConversation = (conversation) => {
  return { 
    type: 'SELECT_CONVERSATION', 
    payload: conversation 
  };
};
 
export const getConversations = (userId) => async dispatch => {
  const conversations = await bunq.get(`/conversation/user/${userId}`);
  dispatch({ 
    type: 'GET_CONVERSATIONS', 
    payload: conversations.data 
  });
}