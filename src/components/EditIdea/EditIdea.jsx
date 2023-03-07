import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function EditIdea() {
    const user = useSelector((store) => store.user);
    const idea = useSelector((store) => store.ideas);

    const id = idea.id;
    const [name, setName] = useState(idea.name);
    const [details, setDetails] = useState(idea.details);
    const [style, setStyle] = useState(idea.style); // should I be putting this getter value somwhere in the return?
    const [placement, setPlacement] = useState(idea.placement); // should I be putting this getter value somwhere in the return?
    const { thisIdea } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_THIS_IDEA',
            payload: thisIdea
        })
    })

    const submitUpdate = (event) => {
        event.preventDefault();
        // const updatedIdea = {
        //     name,
        //     details,
        //     style,
        //     placement
        //   }
          // console.log('newIdeassssss:', newIdea);
          dispatch({
            type: 'EDIT_IDEA',
            payload: {id, name, details, style, placement}
          }); 
          // history.push back to the ideas page
          history.push('/ideas');
    };
    

    return (
        <div className="container">
            
            <section className="edit-idea-header">
                <h2>{user.username}'s Tattoo Editor</h2> 
            </section>

            <section className="edit-idea-container">
                <>
                <form className="edit-idea-form" onSubmit={submitUpdate}>

                    <section className="edit-idea-name">
                    <input value={name} id="name" placeholder="Tattoo Name" onChange={(event) => setName(event.target.value)} />
                    </section>
            
                    <section className="edit-idea-details">
                        <input value={details} id="details" placeholder="Tattoo Details" onChange={(event) => setDetails(event.target.value)} />
                    </section>
            
                    <section className="edit-idea-style">
                        <label htmlFor="style">Style [choose one]:</label>
                        &nbsp; &nbsp;
                        <select value={style} onChange={(event) => setStyle(event.target.value)}>
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
            
                    <section className="edit-idea-placement">
                        <label htmlFor="placement">Desired Placement [choose one]:</label>
                        &nbsp; &nbsp;
                        <select value={placement} onChange={(event) => setPlacement(event.target.value)}>
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
                    <br />
                    
                    <button className="submit-button" type="submit">Update Idea</button>
            
                </form>
                </>
            </section>
        </div>
      );
}

export default EditIdea;