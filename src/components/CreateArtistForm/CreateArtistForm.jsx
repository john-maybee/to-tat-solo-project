import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'; // id I end up including the useSelector for the user store, then keep the useSelector here.
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { PushPinOutlined } from '@mui/icons-material';


function CreateArtistForm() {
  
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [style, setStyle] = useState('');
  const [instagram, setInstagram] = useState('');
  const [shop, setShop] = useState('');
  
  const history = useHistory();
  const dispatch = useDispatch();

  const postArtist = (event) => {
    event.preventDefault();
    const newArtist = {
      name,
      shop,
      instagram,
      style,
      details,
    }
    
    dispatch({
      type: 'POST_ARTIST',
      payload: {newArtist}
    }); 
    
    history.push('/artists');
  }; // end postArtist

  return (
    <>
    <form className="artist-form" onSubmit={postArtist}>
       
        <section className="new-artist-name">
          <TextField fullWidth value={name} color="success" id="name" label="Artist's Name" onChange={(event) => setName(event.target.value)} />
        </section>
        <br/>

        <section className="new-artist-shop">
          <TextField fullWidth value={shop} color="success" id="shop" label="Home Shop" onChange={(event) => setShop(event.target.value)} />
        </section>
        <br/>

        <section className="new-artist-instagram">
          <TextField fullWidth value={instagram} color="success" id="instagram" label="Instagram Handle @" placeholder="Instagram Handle" onChange={(event) => setInstagram(event.target.value)} />
        </section>
        <br/>

        <section className="new-artist-style">
            <label htmlFor="style">Primary Style [choose one]:</label>
            &nbsp; &nbsp;
            <select onChange={(event) => setStyle(event.target.value)}>
                <option value="Undecided">Undecided</option>
                <option value="American Traditional">American Traditional</option>
                <option value="Black and Grey">Black and Grey</option>
                <option value="Neo-Traditional">Neo-Traditional</option>
                <option value="Realism">Realism</option>
                <option value="New School">New School</option>
                <option value="Fine Line">Fine Line</option>
                <option value="Japanese Traditional">Japanese Traditional</option>
                <option value="Tribal">Tribal</option>
                <option value="Illustrative">Illustrative</option>
                <option value="Ornamental">Ornamental</option>
                <option value="Abstract">Abstract</option>
                <option value="Blackwork">Blackwork</option>
                <option value="Cartoon/Anime">Cartoon/Anime</option>
                <option value="Continuous Line Contour">Continuous Line Contour</option>
                <option value="Geometric">Geometric</option>
                <option value="Script/Lettering">Script/Lettering</option>
                <option value="Surrealism">Surrealism</option>
                <option value="Trash Polka">Trash Polka</option>
                <option value="Watercolor">Watercolor</option>
            </select>
        </section>

        <br />

        <section className="new-artist-details">
            <TextField fullWidth className="new_artist_textfield" color="success" value={details} id="details" label="Other Details" onChange={(event) => setDetails(event.target.value)} />
        </section>
        <br/>
        {/* <button className="submit-button" type="submit">Save Artist</button> */}
        <Button 
          className="mui_submit_btn"
          type="submit"
          variant="contained"
          endIcon={<PushPinOutlined />} 
          sx={{ 
            border: "1px dotted #282828", 
            backgroundColor: '#E1AD01', 
            color: "#282828", 
            width: "100%", 
            "&:active": {backgroundColor: "#fcf7e6"}, 
            "&:hover": {backgroundColor:"#80a9a4"} 
          }}>
              Save To Tattoo Artist List
        </Button>

    </form>
    </>
  );
}

export default CreateArtistForm;