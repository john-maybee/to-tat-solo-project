import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* artistsSaga(props) {
  yield takeLatest('FETCH_ARTISTS', fetchArtists);
  yield takeEvery('POST_ARTIST', postArtist);
  yield takeEvery('DELETE_ARTIST', deleteArtist);
  yield takeEvery('EDIT_ARTIST', editArtist);
  yield takeEvery('FETCH_THIS_ARTIST', fetchThisArtist);
}

// worker Saga: will be fired on "FETCH_IDEAS" actions
function* fetchArtists() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }; // do I need to add action into the fetchIdeas function?

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/artists', config);
    console.log('get all: ', response.data);
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_ARTISTS', payload: response.data });
  } catch (error) {
    console.log('Artists get request failed: ', error);
  };
}; // end of fetchIdeas function

function* fetchThisArtist(action) {
  console.log('This artist: ', action.payload);
  const id = action.payload;
  try {
    const thisArtist = yield axios.get(`/api/artists/${id}`);

    yield put({ type: 'SET_THIS_ARTIST', payload: thisArtist.data[0]});
  } catch (error) {
    console.log('This Artist get request failed: ', error);
  };
};


// worker Saga: fired off on "POST_IDEA" action
function* postArtist(action) {
  console.log('new artist: ', action.payload);
  try {

    // passes the name, details, style, and placement from the payload to the server
    yield axios.post(`/api/artists`, action.payload);

    yield fetchArtists({ type: 'FETCH_ARTISTS', payload: action.payload}); 
  
  }
  catch (error) {
    console.log('Error with postArtist:', error);
  };
}; // end of postIdea function

// worker Saga: fired off on "DELETE_IDEA" action
function* deleteArtist(action) {
  console.log('artist being deleted: ', action.payload);
  const id = action.payload.id;
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.delete(`/api/artists/${id}`, config);

    yield put({ type: 'FETCH_ARTISTS'});
  } catch (error) {
    console.log('Error deleting artist', error);
  };
}; // end of deleteIdea function



// worker Saga: fired off on "EDIT_IDEA" action
// send the updated information for thisIdea to the server
function* editArtist(action) {
  console.log('artist being edited: ', action.payload.id);
  const id = action.payload.id;
  try {
    yield axios.put(`/api/artists/${id}`, {
      name: action.payload.name,
      shop: action.payload.shop,
      instagram_handle: action.payload.instagram_handle,
      primary_style: action.payload.primary_style,
      details: action.payload.details
    });
    yield fetchArtists({ type: 'FETCH_ARTISTS', payload: action.payload});
  } catch (error) {
    console.log('Error editing artist', error);
  };
};

// function* editOnChange(action){
//   try {
//   yield axios.put(`/api/ideas/${action.payload.id}`, {name: action.payload.name});

//   } catch (error) {
//   console.log('Error editing idea', error);
// };
// }

export default artistsSaga;
