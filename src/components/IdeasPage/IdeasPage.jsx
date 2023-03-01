import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function IdeasPage() {
  const dispatch = useDispatch();

  const ideas = useSelector(store => store.ideas);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_IDEAS' });
  }, [dispatch]);
  return (
    <div className="container">
      <h2>{user.username}'s Tattoo Ideas</h2>
      <section className="idea-container">
        {JSON.stringify(ideas)}
      </section> 
    </div>
  );
} // the section holding the json stringify will be altered to map out the users ideas

export default IdeasPage;

// Questions:
// What do we need to include in the InfoPage, and how is this different from the AboutPage?
// Is this just where we are supposed to display all of the data that is in the database?
