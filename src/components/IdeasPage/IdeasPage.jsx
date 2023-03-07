import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import './IdeasPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function IdeasPage() {
  const dispatch = useDispatch();

  const ideas = useSelector(store => store.ideas);
  const user = useSelector((store) => store.user);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_IDEAS' });
  }, []); // do I need to write dispatch within the empty array?

  const deleteIdea = (idea) => {
    dispatch({
      type: 'DELETE_IDEA',
      payload: {
        id: idea.id
      }
    });
  }

  const editIdea = (idea) => {
    dispatch({
      type: 'EDIT_IDEA',
      payload: {
        id: idea.id
      }
    });
    // will need to add a history.push to the edit page once I create an edit page.
  }

  return (
    <div className="container">
      <h2>{user.username}'s Tattoo Ideas</h2>
      <section className="ideas-container">

        {ideas.map(idea => {
          return(
            <div key={idea.id} className="thisIdea">
              <section className="thisIdeaHeader">
                <button onClick={() => editIdea(idea)}>edit</button>
                <h3>"{idea.name}"</h3>
                <button onClick={() => deleteIdea(idea)}>delete</button>
              </section>
              <section className="thisIdeaDetails">
                <h4>Details: (change colon to icon or tat gun)</h4>
                <p>{idea.details}</p>
              </section>
              <section className="thisIdeaStyle">
                <h4>Style:</h4>
                <p>{idea.style}</p>
              </section>
              <section className="thisIdeaPlacement">
                <h4>On my: </h4>
                <p>{idea.placement}</p>
              </section>
            </div>
          );
        })}

      </section> 
    </div>
  );
}; // the section holding the json stringify will be altered to map out the users ideas
// also add a link to the CreateIdeaPage

export default IdeasPage;

// Questions:
// What do we need to include in the InfoPage, and how is this different from the AboutPage?
// Is this just where we are supposed to display all of the data that is in the database?

// Tools utilized:  {JSON.stringify(ideas)}
