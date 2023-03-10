import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './EditIdea.css';


const EditIdea = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const user = useSelector((store) => store.user);
    const thisIdea = useSelector((store) => store.thisIdea);
    
    const { id } = useParams();
    const [name, setName] = useState(thisIdea.name);
    const [details, setDetails] = useState(thisIdea.details);
    const [style, setStyle] = useState(thisIdea.style); // should I be putting this getter value somwhere in the return?
    const [placement, setPlacement] = useState(thisIdea.placement); // should I be putting this getter value somwhere in the return?

    console.log('asdfghjdfghjdfghj', thisIdea);

    useEffect(() => {
        dispatch({
            type: "FETCH_THIS_IDEA",
            payload: id
        });
    }, [id]); 


    const submitUpdate = (event) => {
        event.preventDefault();
        console.log('submitting the payload: ', id, name, details, style, placement);
        const editedIdea = {
            id,
            name,
            details,
            style,
            placement, 
        }
        console.log('editedIdea const: ', editedIdea);
          dispatch({
            type: "EDIT_IDEA",
            payload: editedIdea
          });
          setName({name: ''});
          setDetails({details: ''});
          setStyle({style: ''});
          setPlacement({placement: ''});
          
          history.goBack();
    };

    const changeName = (event) => {
        console.log('updated name: ', event.target.value);
        dispatch({
            type: "EDIT_NAME_ONCHANGE",
            payload: {property: 'name', value: event.target.value}
        });
    }

    const changeDetails = (event) => {
        console.log('updated details: ', event.target.value);
        dispatch({
            type: "EDIT_DETAILS_ONCHANGE",
            payload: {property: 'details', value: event.target.value}
        });
    }

    const changeStyle = (event) => {
        console.log('updated style: ', event.target.value);
        dispatch({
            type: "EDIT_STYLE_ONCHANGE",
            payload: {property: 'style', value: event.target.value}
        });
    }

    const changePlacement = (event) => {
        console.log('updated placement: ', event.target.value);
        dispatch({
            type: "EDIT_PLACEMENT_ONCHANGE",
            payload: {property: 'placement', value: event.target.value}
        });
    }

    return (
        <div className="container">
            
            <div className="edit-idea-header">
                {user.username 
                ? <h2>{user.username}'s Tattoo Editor</h2> 
                : null
                }
            </div>

            <section className="edit-idea-container">
                            <form onSubmit={submitUpdate}>
                            <div className="idea-editor">
                           
                                    <div key={thisIdea.id} className="edit">
                                            <label htmlFor="title">Tattoo Name:</label><br/>
                                            <input 
                                                key={thisIdea.name}
                                                defaultValue={thisIdea.name}
                                                id="name"
                                                placeholder="Update Name"
                                                onChange={(event) => changeName(event)} 
                                            />
                                    
                        
                                    
                                            
                                            <br/>

                                            <label htmlFor="details">Details:</label><br/>
                                            <input 
                                            key={thisIdea.details}
                                            defaultValue={thisIdea.details} id="details"
                                            placeholder="Update Details"
                                            onChange={(event) => changeDetails(event)}
                                            />                         
                                            <br/>

                                            <label htmlFor="style">Style [choose one]:</label>
                                            &nbsp; &nbsp;
                                            <select 
                                            key={thisIdea.style}
                                            defaultValue={thisIdea.style}
                                            onChange={(event) => changeStyle(event)}
                                            >
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
                                            defaultValue={thisIdea.placement}
                                            onChange={(event) => changePlacement(event)}
                                            >   
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
                           

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <button 
                                    className="submit-button"
                                    type="submit"
                                >
                                    Send update to my tattoos
                                </button>

                        </div>
                    </form> 
           
            </section>
        </div>
      );
}

export default EditIdea;