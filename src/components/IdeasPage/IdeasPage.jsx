import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function IdeasPage() {
  const dispatch = useDispatch();

  // const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_IDEAS' });
  }, [dispatch]);
  return (
    <div className="container">
      <p>Ideas Page</p>
    </div>
  );
}

export default IdeasPage;

// Questions:
// What do we need to include in the InfoPage, and how is this different from the AboutPage?
// Is this just where we are supposed to display all of the data that is in the database?
