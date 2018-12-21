import bunq from '../api/bunq';

export const getUsers = () => async dispatch => {
  const users = await bunq.get('/users');
  dispatch({ type: 'GET_USERS', payload: users.data });
};

export const getComments = (conversationId, lastMessageId) => async dispatch => {
  const comments = await bunq.get(`/conversation/${conversationId}/new/${lastMessageId}`);
  dispatch({ type: 'GET_COMMENTS', payload: comments.data });
} 