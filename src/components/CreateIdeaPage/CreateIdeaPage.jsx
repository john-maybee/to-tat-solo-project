import React from 'react';
import { useSelector } from 'react-redux';
import "@fontsource/roboto";


import CreateIdeaForm from '../CreateIdeaForm/CreateIdeaForm';

function CreateIdeaPage() {
    
    const user = useSelector((store) => store.user); // re-added this when I added the new-idea-header back into this component
  
    
    return (
        <div className="container">
            
            <section className="new-idea-header">
                <h2>{user.username}'s New Tattoo Idea</h2> 
            </section>
            <section className="new-idea-container">
                <CreateIdeaForm /> 
            </section> 
        </div>
    ); 
  }; 
  
  export default CreateIdeaPage;