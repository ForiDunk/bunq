export default (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CONVERSATION':
      return action.payload;
    default:
      return state;
  }
};