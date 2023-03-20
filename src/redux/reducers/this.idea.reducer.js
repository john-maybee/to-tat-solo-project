const thisIdeaReducer = (state = {}, action) => {
  console.log('thisIdeaReducer action: ', action);  
    if(action.type === 'SET_THIS_IDEA') {
        return action.payload;
    } else if (action.type === 'EDIT_NAME_ONCHANGE'){
      console.log('EDIT ENTERED', action.payload);
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    } else if (action.type === 'EDIT_DETAILS_ONCHANGE'){
      console.log('EDIT DETAILS', action.payload);
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    } else if (action.type === 'EDIT_STYLE_ONCHANGE'){
      console.log('EDIT STYLE', action.payload);
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    } else if (action.type === 'EDIT_PLACEMENT_ONCHANGE'){
      console.log('EDIT PLACEMENT', action.payload);
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    }
      return state;
  }; // End of thisIdeaReducer function. 
  // Sets the specified idea and can also edit each value of that idea
  
  // user will be on the redux state at:
  // state.user
  export default thisIdeaReducer;