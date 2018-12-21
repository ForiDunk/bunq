import bunq from '../api/bunq';

export const getUsers = () => async dispatch => {
  const users = await bunq.get('/users');
  dispatch({ type: 'GET_USERS', payload: users.data });
} 