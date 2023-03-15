import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import './ArtistsPage.css';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function ArtistsPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const artists = useSelector((store) => store.artists);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_ARTISTS' });
  }, []);

  const deleteArtist = (artist) => {
    dispatch({
      type: 'DELETE_ARTIST',
      payload: {
        id: artist.id
      }
    })
  }

  const handleEditArtist = (artist) => {
    console.log('in handleEditArtist const on artists page');
    dispatch({
      type: 'SET_THIS_ARTIST',
      payload: artist
    });
    history.push(`/editartist`); 
  }

  return (
    <div className="container">
      <h2 className="header_artists">{user.username}'s Saved Artists</h2>
      <section className="artists-container">

        {artists.map(artist => {
          return(
            <div key={artist.id} className="thisArtist">

              <section className="thisArtistHeader">
                
                <Button 
                    className="mui_btn" 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#E1AD01', 
                        color: "#282828", 
                        "&:active": {backgroundColor: "#fcf7e6"}, 
                        "&:hover": {backgroundColor:"#80a9a4"} 
                    }} 
                    onClick={() => deleteArtist(artist)}
                >
                    <Delete />
                </Button>
              
                <h3 className="artists_names"><strong>{artist.name}</strong></h3>
                
                <Button 
                    className="mui_btn" 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: '#E1AD01', 
                        color: "#282828", 
                        "&:active": {backgroundColor: "#fcf7e6"}, 
                        "&:hover": {backgroundColor:"#80a9a4"} 
                    }} 
                    onClick={() => handleEditArtist(artist)}
                >
                    <Edit />
                </Button>
               
              </section>
             
              <section className="thisArtistShop">
                <p><strong>Home Shop:</strong> {artist.shop}</p>
              </section>

              <section className="thisArtistInstagram">
                <p><strong>Instagram Handle:</strong> @{artist.instagram}</p>
              </section>

              <section className="thisArtistStyle">
                <p><strong>Primary Style:</strong> {artist.style}</p>
              </section>            

              <section className="thisArtistDetails">
                <p><strong>Other Details Below:</strong> </p>
                <p>{artist.details}</p>
              </section>            
              <br/>
            </div>
          );
        })}

      </section> 
    </div>
  );
};
// also add a link to the CreateArtistPage

export default ArtistsPage;