import React from 'react';
import { useSelector } from 'react-redux';
import "@fontsource/roboto";


import CreateIdeaForm from '../CreateIdeaForm/CreateIdeaForm';

//////////////////////////////////CreateIdeaPage function///////////////////////////////////////
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
    ); // end of the returned container that also displays the CreateIdeaForm
  }; // end of CreateIdeaPage function
  
  export default CreateIdeaPage;