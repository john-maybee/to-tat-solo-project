import React from 'react';
import { useSelector } from 'react-redux';


import CreateArtistForm from '../CreateArtistForm/CreateArtistForm';

function CreateArtistPage() {
    
    const user = useSelector((store) => store.user); // re-added this when I added the new-artist-header back into this component
  
    
    return (
        <div className="container">
            
            <section className="new-artist-header">
                <h2>{user.username}'s New Tattoo Artist</h2> 
            </section>
            <section className="new-artist-container">
                <CreateArtistForm /> 
            </section> 
        </div>
    );
  }; 
  
  export default CreateArtistPage;