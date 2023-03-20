import React from 'react';
import { useSelector } from 'react-redux';
import "@fontsource/roboto";


import CreateArtistForm from '../CreateArtistForm/CreateArtistForm';

///////////////////////////////////CreateArtistPage function///////////////////////////////////////
function CreateArtistPage() {
    
    const user = useSelector((store) => store.user); // creates a const that represents the 
    //current users information from the store.
    
    return (
        <div className="container">
            
            <section className="new-artist-header">
                <h2>{user.username}'s New Artist</h2> 
            </section>
            <section className="new-artist-container">
                <CreateArtistForm /> 
            </section> 
        </div>
    ); // end of the container that is displayed on the DOM for the CreateArtistPage and displays the CreateArtistForm
  }; // end of CreateArtistPage function 
  
  export default CreateArtistPage;