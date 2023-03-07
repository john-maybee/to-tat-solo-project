import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* ideasSaga() {
  yield takeLatest('FETCH_IDEAS', fetchIdeas);
  yield takeEvery('POST_IDEA', postIdea);
  yield takeEvery('DELETE_IDEA', deleteIdea);
}

// worker Saga: will be fired on "FETCH_IDEAS" actions
function* fetchIdeas() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }; // do I need to add action into the fetchIdeas function?

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/ideas', config);
    console.log('get all: ', response.data);
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_IDEAS', payload: response.data });
  } catch (error) {
    console.log('Ideas get request failed: ', error);
  }
} // end of fetchIdeas function


// worker Saga: fired off on "POST_IDEA" action
function* postIdea(action) {
  console.log('new idea: ', action.payload);
  try {

    // passes the name, details, style, and placement from the payload to the server
    yield axios.post(`/api/ideas`, action.payload);
    // console.log('newIdea: ', newIdea);
    // if (action.history) {
    //   action.history.push('/ideas');
    // }

    yield fetchIdeas({ type: 'FETCH_IDEAS', payload: action.payload}); 
  
  }
  catch (error) {
    console.log('Error with postIdea:', error);
  }
} // end of postIdea function

// worker Saga: fired off on "DELETE_IDEA" action
function* deleteIdea(action) {
  console.log('idea being deleted: ', action.payload);
  // const id = action.payload;
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.delete(`/api/ideas/${action.payload.id}`, config);
    yield put({ type: 'FETCH_IDEAS'});
  } catch (error) {
    console.log('Error deleting idea', error);
  }
} // end of deleteIdea function

export default ideasSaga;
