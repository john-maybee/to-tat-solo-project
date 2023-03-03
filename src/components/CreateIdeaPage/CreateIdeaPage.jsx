import React from 'react';
import { useSelector } from 'react-redux';

function CreateIdeaPage() {

    const user = useSelector((store) => store.user);
  
  
    return (
        <div className="container">
            <h2>{user.username}'s New Tattoo Idea</h2>
            
            <section className="new-idea-container">
                
                <form className="new-idea">

                    <section className="new-idea-name">
                        <input name="name" id="name" placeholder="Tattoo Name"></input>
                    </section>

                    <section className="new-idea-details">
                        <input name="details" id="details" placeholder="Tattoo Details"></input>
                    </section>

                    <section className="new-idea-style">
                        <label for="style">Style [choose one]:</label>
                        <select name="style" id="style">
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

                    <section className="new-idea-placement">
                        <label for="placement">Desired Placement [choose one]:</label>
                        <select name="placement" id="placement">
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

                </form>
              
            </section> 
        </div>
    );
  }; // the section holding the json stringify will be altered to map out the users ideas
  
  export default CreateIdeaPage;