import bunq from '../api/bunq';

export const getUser = (userId) => async dispatch => {
  const user = await bunq.get(`/user/${userId}`);
  dispatch({ type: 'GET_USER', payload: user.data });
};

export const getUsers = () => async dispatch => {
  const users = await bunq.get('/users');
  dispatch({ type: 'GET_USERS', payload: users.data });
};

export const getComments = (conversationId, lastMessageId) => async dispatch => {
  const comments = await bunq.get(`/conversation/${conversationId}/new/${lastMessageId}`);
  dispatch({ type: 'GET_COMMENTS', payload: comments.data });
} 
export const getConversationDetails = (conversationId) => async dispatch => {
  const conversation = await bunq.get(`/conversation/${conversationId}`);
  dispatch({ type: 'GET_CONVERSATION_DETAILS', payload: conversation.data })
}