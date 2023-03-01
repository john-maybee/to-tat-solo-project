const ideasReducer = (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'SET_IDEAS':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default ideasReducer;
