import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import './EditArtist.css';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { PushPinOutlined } from '@mui/icons-material';


const EditArtist = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user); // const user created
    const thisArtist = useSelector((store) => store.thisArtist); // const thisArtist created

    

    const submitUpdate = (event) => {
        event.preventDefault();
        console.log('submitting the payload: ', thisArtist.name, );
   
          dispatch({
            type: "EDIT_ARTIST",
            payload: thisArtist
          });

          history.push('/artists');
    }; // end of submitUpdate handler. This dispatches an edit for thisArtist and sends any changes to the artists database.

    const changeName = (event) => {
        console.log('updated name: ', event.target.value);
        dispatch({
            type: 'EDIT_ARTISTNAME_ONCHANGE',
            payload: {property: 'name', value: event.target.value}
        });
    } // end of changeName handler. Dispatches a name update on change that updates the dom as you type.

    const changeDetails = (event) => {
        console.log('updated artist details: ', event.target.value);
        dispatch({
            type: "EDIT_ARTISTDETAILS_ONCHANGE",
            payload: {property: 'details', value: event.target.value}
        });
    } // end of changeDetails handler. Dispatches a details update on change that updates the dom as you type.

    const changeStyle = (event) => {
        console.log('updated primary style: ', event.target.value);
        dispatch({
            type: "EDIT_ARTISTSTYLE_ONCHANGE",
            payload: {property: 'style', value: event.target.value}
        });
    } // end of changeStyle handler. Dispatches a style update on change that updates the dom as you type.

    const changeShop = (event) => {
        console.log('updated shop: ', event.target.value);
        dispatch({
            type: "EDIT_SHOP_ONCHANGE",
            payload: {property: 'shop', value: event.target.value}
        });
    } // end of changeShop handler. Dispatches a shop update on change that updates the dom as you type.

    const changeInstagram = (event) => {
        console.log('updated instagram: ', event.target.value);
        dispatch({
            type: "EDIT_INSTAGRAM_ONCHANGE",
            payload: {property: 'instagram', value: event.target.value}
        });
    } // end of changeInstagram handler. Dispatches a instagram handle update on change that updates the dom as you type.


    return (
        <div className="container">
            
            <div className="edit-artist-header">
                {user.username 
                ? <h2>{user.username}'s Artist Editor</h2> 
                : null
                }
            </div>

            <section className="edit-artist-container">
                <form onSubmit={submitUpdate}>
                    <div className="artist-editor">
                
                        <div key={thisArtist.id} className="edit">
                                
                                <TextField fullWidth 
                                    defaultValue={thisArtist.name} 
                                    color="success" 
                                    id="name" 
                                    label="Artist's Name" 
                                    onChange={(event) => changeName(event)} 
                                />

                                <br/>
                                <br/>

                                <TextField fullWidth 
                                    defaultValue={thisArtist.shop} 
                                    color="success" 
                                    id="shop" 
                                    label="Home Shop" 
                                    onChange={(event) => changeShop(event)} 
                                />                                                                                          
                                
                                <br/>
                                <br/>                            

                                <TextField fullWidth 
                                    defaultValue={thisArtist.instagram} 
                                    color="success" id="instagram" 
                                    label="Instagram Handle @" 
                                    placeholder="Instagram Handle" 
                                    onChange={(event) => changeInstagram(event)} 
                                />                                                                                           
                                
                                <br/>
                                <br/>

                                <FormControl fullWidth>
                                    <InputLabel id="mui_select_artist_style_label" color="success" >Artist's Primary Style</InputLabel>
                                    <Select
                                    labelId="mui_select_artist_style_label"
                                    id="style"
                                    defaultValue={thisArtist.style}
                                    label="Artist's Primary Style"
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

                                <TextField fullWidth multiline 
                                    className="new_artist_textfield" 
                                    color="success" 
                                    defaultValue={thisArtist.details} 
                                    id="details" 
                                    label="Other Details" 
                                    onChange={(event) => changeDetails(event)} 
                                />

                            <br/>
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
                            Save Artist Update
                        </Button>

                    </div>
                </form> 
           
            </section>
        </div>
      );
} // end of EditIdea function. This allows users to update each aspect of thisIdea that is fetched and displayed into the form.

export default EditArtist;

// previously used inputs and dropdowns:

// console.log('asdfghjdfghjdfghj', thisArtist);
{/* <label htmlFor="title">Artist Name:</label><br/>
<input 
    defaultValue={thisArtist.name}
    id="name"
    placeholder="Update Name"
    onChange={(event) => changeName(event)} 
/>   */}

{/* <input 
    defaultValue={thisArtist.shop}
    id="shop"
    placeholder="Update Shop"
    onChange={(event) => changeShop(event)} 
/>      */}

{/* <input 
    defaultValue={thisArtist.instagram}
    id="instagram"
    placeholder="Update Instagram Handle"
    onChange={(event) => changeInstagram(event)} 
/>     */}

{/* <label htmlFor="style">Primary Style [choose one]:</label>
&nbsp; &nbsp;
<select 

defaultValue={thisArtist.style}
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

{/* <label htmlFor="details">Other Details:</label><br/>
    <input 
    
    defaultValue={thisArtist.details} 
    id="details"
    placeholder="Update Details"
    onChange={(event) => changeDetails(event)}
/> */}