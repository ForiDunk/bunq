export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_CONVERSATION_DETAILS':
      return action.payload;
    default:
      return state;
  }
};