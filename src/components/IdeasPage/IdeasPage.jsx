import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import './IdeasPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function IdeasPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const ideas = useSelector((store) => store.ideas);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_IDEAS' });
  }, []);

  const deleteIdea = (idea) => {
    dispatch({
      type: 'DELETE_IDEA',
      payload: {
        id: idea.id
      }
    })
  }

  const handleEditIdea = (idea) => {
    console.log('in editIdea const on ideas page');
    dispatch({
      type: 'SET_THIS_IDEA',
      payload: idea
    });
    history.push(`/edit`); 
  }

  return (
    <div className="container">
      <h2 className="header_ideas">{user.username}'s Tattoo Ideas</h2>
      <section className="ideas-container">

        {ideas.map(idea => {
          return(
            <div key={idea.id} className="thisIdea">

              <section className="thisIdeaHeader">
                <Button className="mui_btn" variant="contained" sx={{ backgroundColor: '#E1AD01', color: "#005249", "&:active": {backgroundColor: "#fcf7e6"}, "&:hover": {backgroundColor:"#80a9a4"} }} onClick={() => deleteIdea(idea)}><Delete /></Button>
                {/* <button className="btn" onClick={() => handleEditIdea(idea)}>edit</button> */}
                <h3 className="ideas_names">{idea.name}</h3>
                
                <Button className="mui_btn" variant="contained" sx={{ backgroundColor: '#E1AD01', color: "#005249", "&:active": {backgroundColor: "#fcf7e6"}, "&:hover": {backgroundColor:"#80a9a4"} }} onClick={() => handleEditIdea(idea)}><Edit /></Button>
                {/* <button className="btn" onClick={() => deleteIdea(idea)}>delete</button> */}
              </section>
             
              <section className="thisIdeaStyle">
                <p>Style: {idea.style}</p>
              </section>

              <section className="thisIdeaPlacement">
                <p>Placement: {idea.placement}</p>
              </section>

              <section className="thisIdeaDetails">
                <p>Details: (change colon to icon or tat gun)</p>
                <p>{idea.details}</p>
              </section>
              
              
            </div>
          );
        })}

      </section> 
    </div>
  );
};
// also add a link to the CreateIdeaPage

export default IdeasPage;