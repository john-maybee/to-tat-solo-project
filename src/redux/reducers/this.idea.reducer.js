const thisIdeaReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_THIS_IDEA':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default thisIdeaReducer;