const thisArtistReducer = (state = {}, action) => {
    console.log('thisArtistReducer action: ', action);  
      if(action.type === 'SET_THIS_ARTIST') {
          return action.payload;
      } else if (action.type === 'EDIT_ARTISTNAME_ONCHANGE'){
        console.log('EDIT ENTERED', action.payload);
        return {
          ...state,
          [action.payload.property]: action.payload.value
        }
      } else if (action.type === 'EDIT_ARTISTDETAILS_ONCHANGE'){
        console.log('EDIT ARTISTDETAILS', action.payload);
        return {
          ...state,
          [action.payload.property]: action.payload.value
        }
      } else if (action.type === 'EDIT_ARTISTSTYLE_ONCHANGE'){
        console.log('EDIT STYLE', action.payload);
        return {
          ...state,
          [action.payload.property]: action.payload.value
        }
      } else if (action.type === 'EDIT_SHOP_ONCHANGE'){
        console.log('EDIT SHOP', action.payload);
        return {
          ...state,
          [action.payload.property]: action.payload.value
        }
      } else if (action.type === 'EDIT_INSTAGRAM_ONCHANGE'){
        console.log('EDIT INSTAGRAM', action.payload);
        return {
          ...state,
          [action.payload.property]: action.payload.value
        }
      }
        return state;
    };// End of thisArtistReducer function. 
    // Sets the specified artist and can also edit each value of that artist
    
    // user will be on the redux state at:
    // state.user
    export default thisArtistReducer;