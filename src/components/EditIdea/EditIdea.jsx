import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import './EditIdea.css';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { PushPinOutlined } from '@mui/icons-material';


const EditIdea = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user); // const user created
    const thisIdea = useSelector((store) => store.thisIdea); // const thisIdea created

    

    const submitUpdate = (event) => {
        event.preventDefault();
        console.log('submitting the payload: ', thisIdea.name );
   
          dispatch({
            type: "EDIT_IDEA",
            payload: thisIdea
          });

          history.push('/ideas');
    }; // end of submitUpdate handler. This dispatches an edit for thisIdea and sends any changes to the ideas database.


    const changeName = (event) => {
        console.log('updated name: ', event.target.value);
        dispatch({
            type: 'EDIT_NAME_ONCHANGE',
            payload: {property: 'name', value: event.target.value}
        });
    } // end of changeName handler. Dispatches a name update on change that updates the dom as you type.


    const changeDetails = (event) => {
        console.log('updated details: ', event.target.value);
        dispatch({
            type: "EDIT_DETAILS_ONCHANGE",
            payload: {property: 'details', value: event.target.value}
        });
    } // end of changeDetails handler. Dispatches a details update on change that updates the dom as you type.

    const changeStyle = (event) => {
        console.log('updated style: ', event.target.value);
        dispatch({
            type: "EDIT_STYLE_ONCHANGE",
            payload: {property: 'style', value: event.target.value}
        });
    } // end of changeStyle handler. Dispatches a style update on change that updates the dom as you type.


    const changePlacement = (event) => {
        console.log('updated placement: ', event.target.value);
        dispatch({
            type: "EDIT_PLACEMENT_ONCHANGE",
            payload: {property: 'placement', value: event.target.value}
        });
    } // end of changePlacement handler. Dispatches a placement update on change that updates the dom as you type.


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
                            
                                <TextField fullWidth 
                                    defaultValue={thisIdea.name} 
                                    id="name" 
                                    label="Name of Tattoo Idea" 
                                    color="success" 
                                    onChange={(event) => changeName(event)} 
                                />                                                                                  
                                
                                <br/>
                                <br/>
                                
                                <TextField fullWidth 
                                    defaultValue={thisIdea.details} 
                                    id="details" 
                                    label="Tattoo Details" 
                                    color="success" 
                                    onChange={(event) => changeDetails(event)} 
                                />                   
                                
                                <br/>
                                <br/>  

                                <FormControl fullWidth>
                                    <InputLabel id="mui_select_style_label" color="success" >Tattoo Style</InputLabel>
                                    <Select
                                    labelId="mui_select_style_label"
                                    id="style"
                                    defaultValue={thisIdea.style}
                                    label="Tattoo Style"
                                    color="success"
                                    onChange={(event) => changeStyle(event)}
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

                                <br/>
                                <br/>
          
                                <FormControl fullWidth>
                                    <InputLabel id="mui_select_placement_label" color="success" >Desired Placement</InputLabel>
                                    <Select
                                    labelId="mui_select_placement_label"
                                    id="placement"
                                    defaultValue={thisIdea.placement}
                                    label="Desired Placement"
                                    color="success"
                                    onChange={(event) => changePlacement(event)}
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
} // end of EditIdea function. This allows users to update each aspect of thisIdea that is fetched and displayed into the form.

export default EditIdea;


// previously used buttons and fields on the form:

// console.log('asdfghjdfghjdfghj', thisIdea);
{/* <label htmlFor="title">Tattoo Name:</label><br/> */}
{/* <input 
    defaultValue={thisIdea.name}
    id="name"
    placeholder="Update Name"
    onChange={(event) => changeName(event)} 
/>           */}

{/* <label htmlFor="details">Details:</label><br/>
<input 

defaultValue={thisIdea.details} 
id="details"
placeholder="Update Details"
onChange={(event) => changeDetails(event)}
/> */}

{/* <label htmlFor="style">Style [choose one]:</label>
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
</select> */}

 {/* <label htmlFor="placement">Desired Placement [choose one]:</label>
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
</select> */}