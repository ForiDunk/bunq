export default (state = [], action) => {
  switch (action.type) {
    case 'GET_CONVERSATIONS':
      return action.payload;
    default:
      return state;
  }
};