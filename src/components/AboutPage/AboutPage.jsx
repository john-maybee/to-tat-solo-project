import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h2>About "To Tat":</h2>
      <div>
        <p>This application will help you keep track of, and expand upon, your own tattoo design ideas. 
        There will also be a place to record the names of tattoo artists and shops you hear about (upcoming). 
        On top of this, users will be able to select which part of the body they would like the tattoo placed.</p>
        <p>The goal is to help people keep track of these designs and curate a list of tattooists with correlating art styles.</p>
      </div>
    </div>
  );
}

export default AboutPage;

// Need to figure out what you would like to include in this about page. Is this where we put the elevator pitch/story?
// Or should I just include the "what this app does"
