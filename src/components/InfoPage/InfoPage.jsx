import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Info Page</p>
    </div>
  );
}

export default InfoPage;

// Questions:
// What do we need to include in the InfoPage, and how is this different from the AboutPage?
// Is this just where we are supposed to display all of the data that is in the database?
