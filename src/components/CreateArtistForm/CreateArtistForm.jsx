import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'; // id I end up including the useSelector for the user store, then keep the useSelector here.
import { useHistory } from 'react-router-dom';


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
          <input value={name} id="name" placeholder="Artist Name" onChange={(event) => setName(event.target.value)} />
        </section>

        <section className="new-artist-shop">
          <input value={shop} id="shop" placeholder="Home Shop" onChange={(event) => setShop(event.target.value)} />
        </section>

        <section className="new-artist-instagram">
          <input value={instagram} id="instagram" placeholder="Instagram Handle" onChange={(event) => setInstagram(event.target.value)} />
        </section>

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
            <input value={details} id="details" placeholder="Other Details" onChange={(event) => setDetails(event.target.value)} />
        </section>
        
        <button className="submit-button" type="submit">Save Artist</button>

    </form>
    </>
  );
}

export default CreateArtistForm;