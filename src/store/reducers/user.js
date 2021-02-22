const users = (state = {}, action) => {
  switch (action.type) {
    case 'LOGGEDIN':
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
};
export default users;

