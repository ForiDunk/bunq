export default (state = {}, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return action.payload;
    default:
      return state;
  }
};