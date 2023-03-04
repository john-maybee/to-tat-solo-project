import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CreateIdeaForm() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [style, setStyle] = useState('');
  const [placement, setPlacement] = useState('');

  const dispatch = useDispatch();

  const postIdea = (event) => {
    event.preventDefault();

    dispatch({
      type: 'POSTIDEA',
      payload: {
        name: name,
        details: details,
        style: style,
        placement: placement,
      },
    });
  }; // end postIdea

  return (
    <form className="idea-form" onSubmit={postIdea}>
      
      <div>
        <section className="new-idea-name">
          <input value={name} name="name" id="name" placeholder="Tattoo Name" onChange={(event) => setName(event.target.value)}></input>
        </section>
      </div>

      <div>
        <section className="new-idea-details">
            <input value={details} name="details" id="details" placeholder="Tattoo Details" onChange={(event) => setDetails(event.target.value)}></input>
        </section>
      </div>

      <div>
        <section className="new-idea-style">
            <label for="style">Style [choose one]:</label>
            <select value={style} name="style" id="style" onChange={(event) => setStyle(event.target.value)}>
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
      </div>

      <div>
        <section className="new-idea-placement">
            <label for="placement">Desired Placement [choose one]:</label>
            <select value={placement} name="placement" id="placement" onChange={(event) => setPlacement(event.target.value)}>
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
        </section>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Submit Idea" 
          onClick={() => {
            history.push('/ideas');
          }}
        />
      </div>

</form>
  );
}

export default CreateIdeaForm;

