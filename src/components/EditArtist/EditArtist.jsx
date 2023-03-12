import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import './EditArtist.css';


const EditArtist = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const thisArtist = useSelector((store) => store.thisArtist);

    console.log('asdfghjdfghjdfghj', thisArtist);

    const submitUpdate = (event) => {
        event.preventDefault();
        console.log('submitting the payload: ', thisArtist.name, );
   
          dispatch({
            type: "EDIT_ARTIST",
            payload: thisArtist
          });

          history.push('/artists');
    };

    const changeName = (event) => {
        console.log('updated name: ', event.target.value);
        dispatch({
            type: 'EDIT_ARTISTNAME_ONCHANGE',
            payload: {property: 'name', value: event.target.value}
        });
    }

    const changeDetails = (event) => {
        console.log('updated artist details: ', event.target.value);
        dispatch({
            type: "EDIT_ARTISTDETAILS_ONCHANGE",
            payload: {property: 'details', value: event.target.value}
        });
    }

    const changeStyle = (event) => {
        console.log('updated primary style: ', event.target.value);
        dispatch({
            type: "EDIT_ARTISTSTYLE_ONCHANGE",
            payload: {property: 'primary_style', value: event.target.value}
        });
    }

    const changeShop = (event) => {
        console.log('updated shop: ', event.target.value);
        dispatch({
            type: "EDIT_SHOP_ONCHANGE",
            payload: {property: 'shop', value: event.target.value}
        });
    }

    const changeInstagram = (event) => {
        console.log('updated instagram handle: ', event.target.value);
        dispatch({
            type: "EDIT_INSTAGRAM_ONCHANGE",
            payload: {property: 'instagram_handle', value: event.target.value}
        });
    }


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
                                <label htmlFor="title">Artist Name:</label><br/>
                                <input 
                                    defaultValue={thisArtist.name}
                                    id="name"
                                    placeholder="Update Name"
                                    onChange={(event) => changeName(event)} 
                                />                                                                                               
                                
                                <br/>

                                <input 
                                    defaultValue={thisArtist.shop}
                                    id="shop"
                                    placeholder="Update Shop"
                                    onChange={(event) => changeShop(event)} 
                                />                                                                                               
                                
                                <br/>

                                <input 
                                    defaultValue={thisArtist.instagram_handle}
                                    id="instagram_handle"
                                    placeholder="Update Instagram Handle"
                                    onChange={(event) => changeInstagram(event)} 
                                />                                                                                               
                                
                                <br/>

                                

                                <label htmlFor="primary_style">Primary Style [choose one]:</label>
                                &nbsp; &nbsp;
                                <select 
                                
                                defaultValue={thisArtist.primary_style}
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

                            <label htmlFor="details">Other Details:</label><br/>
                            <input 
                            
                            defaultValue={thisArtist.details} 
                            id="details"
                            placeholder="Update Details"
                            onChange={(event) => changeDetails(event)}
                            />                         
                            <br/>
                        </div>
                           
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <button 
                            className="submit-button"
                            type="submit"
                        >
                        Send update to my artist list
                        </button>

                    </div>
                </form> 
           
            </section>
        </div>
      );
}

export default EditArtist;