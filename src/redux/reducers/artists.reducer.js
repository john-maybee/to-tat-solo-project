const artistsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ARTISTS':
        return action.payload;
      default:
        return state;
    }
  }; // end of artistsReducer function

  export default artistsReducer;