import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { PushPinOutlined } from '@mui/icons-material';


function CreateIdeaForm() {
  
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [style, setStyle] = useState('');
  const [placement, setPlacement] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const postIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      name,
      details,
      style,
      placement
    }
    
    dispatch({
      type: 'POST_IDEA',
      payload: {newIdea}
    }); // end of postIdea function
    
    history.push('/ideas');
  }; // end postIdea

  return (
    <>
    <form className="idea-form" onSubmit={postIdea}>
        
        <section className="new-idea-name">
          <TextField fullWidth value={name} id="name" label="Name of Tattoo Idea" color="success" onChange={(event) => setName(event.target.value)} />
        </section>

        <br/>

        <section className="new-idea-details">
            <TextField fullWidth multiline value={details} id="details" label="Tattoo Details" color="success" onChange={(event) => setDetails(event.target.value)} />
        </section>

        <br/>

        <section>
          <FormControl fullWidth>
            <InputLabel id="mui_select_style_label" color="success" >Tattoo Style</InputLabel>
            <Select
              labelId="mui_select_style_label"
              id="style"
              value={style}
              label="Tattoo Style"
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

        <br/>

        <section>
          <FormControl fullWidth>
            <InputLabel id="mui_select_placement_label" color="success" >Desired Placement</InputLabel>
            <Select
              labelId="mui_select_placement_label"
              id="placement"
              value={placement}
              label="Desired Placement"
              color="success"
              onChange={(event) => setPlacement(event.target.value)}
            >
              <MenuItem value="Undecided">Undecided</MenuItem>
              <MenuItem value="Upper Arm - Right">Upper Arm - Right</MenuItem>
              <MenuItem value="Upper Arm - Left">Upper Arm - Left</MenuItem>
              <MenuItem value="Forearm - Right">Forearm - Right</MenuItem>
              <MenuItem value="Forearm - Left">Forearm - Left</MenuItem>
              <MenuItem value="Upper Leg - Right">Upper Leg - Right</MenuItem>
              <MenuItem value="Upper Leg - Left">Upper Leg - Left</MenuItem>
              <MenuItem value="Lower Leg - Right">Lower Leg - Right</MenuItem>
              <MenuItem value="Lower Leg - Left">Lower Leg - Left</MenuItem>
              <MenuItem value="Side - Right">Side - Right</MenuItem>
              <MenuItem value="Side - Left">Side - Left</MenuItem>
              <MenuItem value="Back">Back</MenuItem>
              <MenuItem value="Chest">Chest</MenuItem>
              <MenuItem value="Abdomen">Abdomen</MenuItem>
              <MenuItem value="Hand - Right">Hand - Right</MenuItem>
              <MenuItem value="Hand - Left">Hand - Left</MenuItem>
              <MenuItem value="Foot - Right">Foot - Right</MenuItem>
              <MenuItem value="Foot - Left">Foot - Left</MenuItem>
              <MenuItem value="Neck">Neck</MenuItem>
              <MenuItem value="Face">Face</MenuItem>
              <MenuItem value="Butt">Butt</MenuItem>
              <MenuItem value="Head">Head</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </section>

        
        <br />
        
        
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
              Save To Tattoo Idea List
        </Button>
    </form>
    </>
  );
}

export default CreateIdeaForm;

// {id ? <h2>Edit Idea</h2> : <h2>Add Idea</h2> } If I decide to allow an edit on this whole page, then I will add an if/else statement that determines the header.

// Previously used buttons, input and other code:

// const user = useSelector((store) => store.user);
// console.log('newIdeassssss:', newIdea);
{/* <section className="new-idea-header">
          <h2>{user.username}'s New Tattoo Idea</h2>
        </section> */}

{/* <section className="new-idea-header">
          <h2>{user.username}'s New Tattoo Idea</h2>
        </section> */}

{/* <section className="new-idea-style">
    <label htmlFor="style">Style [choose one]:</label>
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
</section> */}

{/* <section className="new-idea-style">
    <label htmlFor="style">Style [choose one]:</label>
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
</section> */}

{/* <section className="new-idea-placement">
  <label htmlFor="placement">Desired Placement [choose one]:</label>
  &nbsp; &nbsp;
  <select onChange={(event) => setPlacement(event.target.value)}>
      <option value="Undecided">Undecided</option>
      <option value="Upper Arm - Right">Upper Arm - Right</option>
      <option value="Upper Arm - Left">Upper Arm - Left</option>
      <option value="Forearm - Right">Forearm - Right</option>
      <option value="Forearm - Left">Forearm - Left</option>
      <option value="Upper Leg - Right">Upper Leg - Right</option>
      <option value="Upper Leg - Left">Upper Leg - Left</option>
      <option value="Lower Leg - Right">Lower Leg - Right</option>
      <option value="Lower Leg - Left">Lower Leg - Left</option>
      <option value="Side - Right">Side - Right</option>
      <option value="Side - Left">Side - Left</option>
      <option value="Back">Back</option>
      <option value="Chest">Chest</option>
      <option value="Abdomen">Abdomen</option>
      <option value="Hand - Right">Hand - Right</option>
      <option value="Hand - Left">Hand - Left</option>
      <option value="Foot - Right">Foot - Right</option>
      <option value="Foot - Left">Foot - Left</option>
      <option value="Neck">Neck</option>
      <option value="Face">Face</option>
      <option value="Butt">Butt</option>
      <option value="Head">Head</option>
  </select>
  </section> */}
  {/* <button className="submit-button" type="submit">Save Idea</button> */}