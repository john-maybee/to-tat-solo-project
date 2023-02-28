import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
      </div>
    </div>
  );
}

export default AboutPage;

// Need to figure out what you would like to include in this about page. Is this where we put the elevator pitch/story?
// Or should I just include the "what this app does"
