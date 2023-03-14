import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import './EditIdea.css';
import { Button } from '@mui/material';
import { PushPinOutlined } from '@mui/icons-material';


const EditIdea = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const thisIdea = useSelector((store) => store.thisIdea);

    console.log('asdfghjdfghjdfghj', thisIdea);

    const submitUpdate = (event) => {
        event.preventDefault();
        console.log('submitting the payload: ', thisIdea.name, );
   
          dispatch({
            type: "EDIT_IDEA",
            payload: thisIdea
          });

          history.push('/ideas');
    };


    const changeName = (event) => {
        console.log('updated name: ', event.target.value);
        dispatch({
            type: 'EDIT_NAME_ONCHANGE',
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
                                    defaultValue={thisIdea.name}
                                    id="name"
                                    placeholder="Update Name"
                                    onChange={(event) => changeName(event)} 
                                />                                                                                               
                                
                                <br/>

                                <label htmlFor="details">Details:</label><br/>
                                <input 
                                
                                defaultValue={thisIdea.details} 
                                id="details"
                                placeholder="Update Details"
                                onChange={(event) => changeDetails(event)}
                                />                         
                                <br/>

                                <label htmlFor="style">Style [choose one]:</label>
                                &nbsp; &nbsp;
                                <select 
                                
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
                                <br/>

                                <label htmlFor="placement">Desired Placement [choose one]:</label>
                                &nbsp; &nbsp;
                                <select 
                                
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
                            }}
                        >
                            Update To Tat List
                        </Button>

                    </div>
                </form> 
           
            </section>
        </div>
      );
}

export default EditIdea;