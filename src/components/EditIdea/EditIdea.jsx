import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './EditIdea.css';


const EditIdea = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    
    const user = useSelector((store) => store.user);
    const thisIdea = useSelector((store) => store.thisIdea);
    
    const { id } = useParams();
    const [name, setName] = useState([{name:''}]);
    const [details, setDetails] = useState([{details:''}]);
    const [style, setStyle] = useState([{styel:''}]); // should I be putting this getter value somwhere in the return?
    const [placement, setPlacement] = useState([{placement:''}]); // should I be putting this getter value somwhere in the return?

    console.log('asdfghjdfghjdfghj', id);

    useEffect(() => {
        dispatch({
            type: "FETCH_THIS_IDEA",
            payload: id
        });
    }, [id]);

    useEffect(() => {
        setName(thisIdea.name);
        setDetails(thisIdea.details);
        setStyle(thisIdea.style);
        setPlacement(thisIdea.placement);
    }, [thisIdea]);

    const updateTattooIdea = () => {
        const nameUpdate = [...name, {name: ''}];
        const detailsUpdate = [...details, {details: ''}];
        const styleUpdate = [...style, {style: ''}];
        const placementUpdate = [...placement, {placement: ''}];
        setName(nameUpdate);
        setDetails(detailsUpdate);
        setStyle(styleUpdate);
        setPlacement(placementUpdate);
    }

    const submitUpdate = (event) => {
        event.preventDefault();
        console.log('submitting the payload: ', id, name, details, style, placement);
          dispatch({
            type: "EDIT_IDEA",
            payload: {id, name, details, style, placement}
          });
          // should I set each param back to ''? 
          // or does clicking the edit idea button on the ideas page change this page on load anyway?
          // history.back to the ideas page/previous page
          history.goBack();
    };
    

    return (
        <div className="container">
            
            <section className="edit-idea-header">
                <h2>{user.username}'s Tattoo Editor</h2> 
            </section>

            <section className="edit-idea-container">
                        <div className="edit-idea">
                            <form onSubmit={submitUpdate}>
                                  
                            {thisIdea.map((thisIdea) => {
                                return (
                                    <div key={thisIdea.id} className="edit-idea">
                                            <label htmlFor="name">Tattoo Name: {thisIdea.name}</label><br/>
                                            <input 
                                                key={thisIdea.name}
                                                value={name}
                                                id="name"
                                                placeholder="Update Name"
                                                onChange={(event) => setName(event.target.value)} 
                                            />
                                            <br/>

                                            <label htmlFor="details">Details: {thisIdea.details}</label><br/>
                                            <input 
                                                key={thisIdea.details}
                                                value={details} id="details"
                                                placeholder="Update Details"
                                                onChange={(event) => setDetails(event.target.value)}
                                            />                         
                                            <br/>

                                            <label htmlFor="style">Style [choose one]:</label>
                                            &nbsp; &nbsp;
                                            <select 
                                                key={thisIdea.style}
                                                value={style}
                                                onChange={(event) => setStyle(event.target.value)}
                                            >
                                                <option value={thisIdea.style}>{thisIdea.style}</option>
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
                                            <br/>

                                            <label htmlFor="placement">Desired Placement [choose one]:</label>
                                            &nbsp; &nbsp;
                                            <select 
                                                key={thisIdea.placement}
                                                value={placement}
                                                onChange={(event) => setPlacement(event.target.value)}
                                            >
                                                <option value={thisIdea.placement}>{thisIdea.placement}</option>
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
                                        
                                        <br />
                                        </div>
                                        )
                            })}
                                <button 
                                    onClick={updateTattooIdea}
                                    type="button"
                                    className="save-button"
                                >
                                    Save Changes
                                </button>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <button 
                                    className="submit-button"
                                    type="submit"
                                >
                                    Send update to my tattoos
                                </button>

                            </form>  
                        </div>
            </section>
        </div>
      );
}

export default EditIdea;