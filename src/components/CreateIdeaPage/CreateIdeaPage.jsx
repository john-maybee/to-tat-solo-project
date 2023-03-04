import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CreateIdeaForm from '../CreateIdeaForm/CreateIdeaForm';

function CreateIdeaPage() {
    const history = useHistory();
    const user = useSelector((store) => store.user);
  
    
    return (
        <div className="container">
            <h2>{user.username}'s New Tattoo Idea</h2>
            
            <section className="new-idea-container">
                <CreateIdeaForm /> 
            </section> 
        </div>
    );
  }; 
  
  export default CreateIdeaPage;