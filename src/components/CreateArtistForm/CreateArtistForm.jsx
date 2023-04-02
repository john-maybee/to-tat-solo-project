import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'; // id I end up including the useSelector for the user store, then keep the useSelector here.
import { useHistory } from 'react-router-dom';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { PushPinOutlined } from '@mui/icons-material';
import "@fontsource/roboto";

///////////////////////////////////CreateArtistForm function///////////////////////////////////////
function CreateArtistForm() {
  
  const [name, setName] = useState(''); // getter and setter for the artist name that starts as a blank string
  const [details, setDetails] = useState(''); // getter and setter for the artist details that starts as a blank string
  const [style, setStyle] = useState(''); // getter and setter for the style that starts as a blank string
  const [instagram, setInstagram] = useState(''); // getter and setter for the instagram handle that starts as a blank string
  const [shop, setShop] = useState(''); // getter and setter for the shop name that starts as a blank string
  
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
    }); // end of POST_ARTIST dispatch that is sending the new artist object 
    // information that was created as the payload.
    
    history.push('/artists');
  }; // end postArtist function that takes in the onSubmit event then pushes to the /artists page

  return (
    <>
    <form className="artist-form" onSubmit={postArtist}>
       
        <section className="new-artist-name">
          <TextField fullWidth 
            value={name} 
            color="success" 
            id="name" 
            label="Artist's Name" 
            onChange={(event) => setName(event.target.value)} 
          />
        </section>
        <br/>

        <section className="new-artist-shop">
          <TextField fullWidth 
            value={shop} 
            color="success" 
            id="shop" 
            label="Home Shop" 
            onChange={(event) => setShop(event.target.value)} 
          />
        </section>
        <br/>

        <section className="new-artist-instagram">
          <TextField fullWidth 
            value={instagram} 
            color="success" 
            id="instagram" 
            label="Instagram Handle @" 
            placeholder="Instagram Handle" 
            onChange={(event) => setInstagram(event.target.value)} 
          />
        </section>
        <br/>

        <section>
          <FormControl fullWidth>
            <InputLabel id="mui_select_artist_style_label" color="success" >Artist's Primary Style</InputLabel>
            <Select
              labelId="mui_select_artist_style_label"
              id="style"
              value={style}
              label="Artist's Primary Style"
              color="success"
              onChange={(event) => setStyle(event.target.value)}
            >
              <MenuItem value="Undecided">Undecided</MenuItem>
              <MenuItem value="American Traditional">American Traditional</MenuItem>
              <MenuItem value="Black and Grey">Black and Grey</MenuItem>
              <MenuItem value="Neo-Traditional">Neo-Traditional</MenuItem>
              <MenuItem value="Realism">Realism</MenuItem>
              <MenuItem value="New School">New School</MenuItem>
              <MenuItem value="Fine Line">Fine Line</MenuItem>
              <MenuItem value="Japanese Traditional">Japanese Traditional</MenuItem>
              <MenuItem value="Tribal">Tribal</MenuItem>
              <MenuItem value="Illustrative">Illustrative</MenuItem>
              <MenuItem value="Ornamental">Ornamental</MenuItem>
              <MenuItem value="Abstract">Abstract</MenuItem>
              <MenuItem value="Blackwork">Blackwork</MenuItem>
              <MenuItem value="Cartoon/Anime">Cartoon/Anime</MenuItem>
              <MenuItem value="Continuous Line Contour">Continuous Line Contour</MenuItem>
              <MenuItem value="Geometric">Geometric</MenuItem>
              <MenuItem value="Script/Lettering">Script/Lettering</MenuItem>
              <MenuItem value="Surrealism">Surrealism</MenuItem>
              <MenuItem value="Trash Polka">Trash Polka</MenuItem>
              <MenuItem value="Watercolor">Watercolor</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </section>

        <br />

        <section className="new-artist-details">
            <TextField fullWidth multiline 
              className="new_artist_textfield" 
              color="success" 
              value={details} 
              id="details" 
              label="Other Details" 
              onChange={(event) => setDetails(event.target.value)} 
            />
        </section>
        <br/>
        
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
  );// end of the returned artist form that has all of the inputs as textfields and mui select dropdowns
}  // end of the CreateArtistForm function that gets displayed on the CreateArtistPage

export default CreateArtistForm;
