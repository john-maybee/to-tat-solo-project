import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import "@fontsource/roboto";

import './IdeasPage.css';

///////////////////////////////////IdeasPage function///////////////////////////////////////
function IdeasPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const ideas = useSelector((store) => store.ideas); // selector that takes in the ideas that are associated with the current user by accessing the reducer
  const user = useSelector((store) => store.user); // selector that takes in the user information to be used on the page

  useEffect(() => {
    dispatch({ type: 'FETCH_IDEAS' });
  }, []); // Fetches the current users saved ideas on page load.

  const deleteIdea = (idea) => {
    dispatch({
      type: 'DELETE_IDEA',
      payload: {
        id: idea.id
      }
    })
  } // handler for the delete button click. Deletes the idea by taking in its id and dispatches a DELETE_IDEA event

  const handleEditIdea = (idea) => {
    console.log('in editIdea const on ideas page');
    dispatch({
      type: 'SET_THIS_IDEA',
      payload: idea
    });
    history.push(`/edit`); 
  } // handler for the edit button click. This takes the whole idea as the payload and pushes to the /edit page.

  return (
    <div className="container">
      <h2 className="header_ideas">{user.username}'s Tattoo Ideas</h2>
      <section className="ideas-container">

        {ideas.map(idea => {
          return(
            <div key={idea.id} className="thisIdea">

              <section className="thisIdeaHeader">
                <Button className="mui_btn" variant="contained" sx={{ backgroundColor: '#E1AD01', color: "#282828", "&:active": {backgroundColor: "#fcf7e6"}, "&:hover": {backgroundColor:"#80a9a4"} }} onClick={() => deleteIdea(idea)}><Delete /></Button>
                
                <h3 className="ideas_names"><strong>{idea.name}</strong></h3>
                
                <Button className="mui_btn" variant="contained" sx={{ backgroundColor: '#E1AD01', color: "#282828", "&:active": {backgroundColor: "#fcf7e6"}, "&:hover": {backgroundColor:"#80a9a4"} }} onClick={() => handleEditIdea(idea)}><Edit /></Button>
               
              </section>
              <div className="svg_bottom">
              <svg width="91" height="6" viewBox="0 0 91 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.1811 2.68121L9.68043 1.41584L9.8437 2.70283L1.16327 3.80404L12.664 5.06941L12.5007 3.78242L21.1811 2.68121Z" fill="#005249"/>
                <path d="M9.68043 1.41584L9.73511 0.918842C9.58287 0.902091 9.43135 0.956041 9.32395 1.06524C9.21655 1.17443 9.16513 1.32683 9.1844 1.47877L9.68043 1.41584ZM21.1811 2.68121L21.244 3.17724C21.4954 3.14535 21.6832 2.93045 21.6811 2.67706C21.679 2.42368 21.4877 2.21192 21.2358 2.18421L21.1811 2.68121ZM9.8437 2.70283L9.90662 3.19885C10.1806 3.1641 10.3745 2.91385 10.3397 2.6399L9.8437 2.70283ZM1.16327 3.80404L1.10034 3.30801C0.848962 3.3399 0.661182 3.5548 0.663286 3.80819C0.665389 4.06157 0.856711 4.27333 1.10859 4.30104L1.16327 3.80404ZM12.664 5.06941L12.6093 5.56641C12.7615 5.58316 12.913 5.52921 13.0204 5.42001C13.1278 5.31082 13.1793 5.15842 13.16 5.00648L12.664 5.06941ZM12.5007 3.78242L12.4378 3.2864C12.3062 3.30309 12.1867 3.37135 12.1055 3.47618C12.0242 3.581 11.988 3.7138 12.0047 3.84535L12.5007 3.78242ZM9.62575 1.91284L21.1264 3.17821L21.2358 2.18421L9.73511 0.918842L9.62575 1.91284ZM10.3397 2.6399L10.1765 1.35292L9.1844 1.47877L9.34767 2.76575L10.3397 2.6399ZM1.2262 4.30006L9.90662 3.19885L9.78077 2.2068L1.10034 3.30801L1.2262 4.30006ZM12.7186 4.57241L1.21795 3.30704L1.10859 4.30104L12.6093 5.56641L12.7186 4.57241ZM12.0047 3.84535L12.1679 5.13233L13.16 5.00648L12.9967 3.7195L12.0047 3.84535ZM21.1182 2.18519L12.4378 3.2864L12.5636 4.27845L21.244 3.17724L21.1182 2.18519Z" fill="#282828"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M67.1811 2.68121L55.6804 1.41584L55.8437 2.70283L47.1633 3.80404L58.664 5.06941L58.5007 3.78242L67.1811 2.68121Z" fill="#005249"/>
                <path d="M55.6804 1.41584L55.7351 0.918842C55.5829 0.902091 55.4313 0.956041 55.324 1.06524C55.2166 1.17443 55.1651 1.32683 55.1844 1.47877L55.6804 1.41584ZM67.1811 2.68121L67.244 3.17724C67.4954 3.14535 67.6832 2.93045 67.6811 2.67706C67.679 2.42368 67.4877 2.21192 67.2358 2.18421L67.1811 2.68121ZM55.8437 2.70283L55.9066 3.19885C56.1806 3.1641 56.3745 2.91385 56.3397 2.6399L55.8437 2.70283ZM47.1633 3.80404L47.1003 3.30801C46.849 3.3399 46.6612 3.5548 46.6633 3.80819C46.6654 4.06157 46.8567 4.27333 47.1086 4.30104L47.1633 3.80404ZM58.664 5.06941L58.6093 5.56641C58.7615 5.58316 58.913 5.52921 59.0204 5.42001C59.1278 5.31082 59.1793 5.15842 59.16 5.00648L58.664 5.06941ZM58.5007 3.78242L58.4378 3.2864C58.3062 3.30309 58.1867 3.37135 58.1055 3.47618C58.0242 3.581 57.988 3.7138 58.0047 3.84535L58.5007 3.78242ZM55.6257 1.91284L67.1264 3.17821L67.2358 2.18421L55.7351 0.918842L55.6257 1.91284ZM56.3397 2.6399L56.1765 1.35292L55.1844 1.47877L55.3477 2.76575L56.3397 2.6399ZM47.2262 4.30006L55.9066 3.19885L55.7808 2.2068L47.1003 3.30801L47.2262 4.30006ZM58.7186 4.57241L47.218 3.30704L47.1086 4.30104L58.6093 5.56641L58.7186 4.57241ZM58.0047 3.84535L58.1679 5.13233L59.16 5.00648L58.9967 3.7195L58.0047 3.84535ZM67.1182 2.18519L58.4378 3.2864L58.5636 4.27845L67.244 3.17724L67.1182 2.18519Z" fill="#282828"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M44.1811 2.68416L32.6804 1.41879L32.8437 2.70577L24.1633 3.80698L35.664 5.07235L35.5007 3.78537L44.1811 2.68416Z" fill="#E1AD01"/>
                <path d="M32.6804 1.41879L32.7351 0.921791C32.5829 0.90504 32.4313 0.95899 32.3239 1.06819C32.2165 1.17738 32.1651 1.32978 32.1844 1.48172L32.6804 1.41879ZM44.1811 2.68416L44.244 3.18019C44.4954 3.14829 44.6832 2.9334 44.6811 2.68001C44.679 2.42662 44.4877 2.21487 44.2358 2.18716L44.1811 2.68416ZM32.8437 2.70578L32.9066 3.2018C33.0382 3.18511 33.1577 3.11685 33.2389 3.01202C33.3201 2.9072 33.3564 2.7744 33.3397 2.64285L32.8437 2.70578ZM24.1633 3.80698L24.1003 3.31096C23.849 3.34285 23.6612 3.55775 23.6633 3.81114C23.6654 4.06452 23.8567 4.27627 24.1086 4.30399L24.1633 3.80698ZM35.664 5.07236L35.6093 5.56936C35.7615 5.58611 35.913 5.53216 36.0204 5.42296C36.1278 5.31377 36.1793 5.16137 36.16 5.00943L35.664 5.07236ZM35.5007 3.78537L35.4378 3.28935C35.1638 3.3241 34.9699 3.57435 35.0047 3.8483L35.5007 3.78537ZM32.6257 1.91579L44.1264 3.18116L44.2358 2.18716L32.7351 0.921791L32.6257 1.91579ZM33.3397 2.64285L33.1764 1.35587L32.1844 1.48172L32.3477 2.7687L33.3397 2.64285ZM24.2262 4.30301L32.9066 3.2018L32.7808 2.20975L24.1003 3.31096L24.2262 4.30301ZM35.7186 4.57536L24.2179 3.30998L24.1086 4.30399L35.6093 5.56936L35.7186 4.57536ZM35.0047 3.8483L35.1679 5.13528L36.16 5.00943L35.9967 3.72244L35.0047 3.8483ZM44.1182 2.18814L35.4378 3.28935L35.5636 4.28139L44.244 3.18019L44.1182 2.18814Z" fill="#282828"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M90.1811 2.68121L78.6804 1.41584L78.8437 2.70283L70.1633 3.80404L81.664 5.06941L81.5007 3.78242L90.1811 2.68121Z" fill="#E1AD01"/>
                <path d="M78.6804 1.41584L78.7351 0.918843C78.5829 0.902093 78.4313 0.956042 78.3239 1.06524C78.2165 1.17443 78.1651 1.32683 78.1844 1.47877L78.6804 1.41584ZM90.1811 2.68121L90.244 3.17724C90.4954 3.14535 90.6832 2.93045 90.6811 2.67706C90.679 2.42368 90.4877 2.21193 90.2358 2.18421L90.1811 2.68121ZM78.8437 2.70283L78.9066 3.19885C79.1806 3.1641 79.3745 2.91385 79.3397 2.6399L78.8437 2.70283ZM70.1633 3.80404L70.1003 3.30801C69.849 3.3399 69.6612 3.5548 69.6633 3.80819C69.6654 4.06157 69.8567 4.27333 70.1086 4.30104L70.1633 3.80404ZM81.664 5.06941L81.6093 5.56641C81.7615 5.58316 81.913 5.52921 82.0204 5.42001C82.1278 5.31082 82.1793 5.15842 82.16 5.00648L81.664 5.06941ZM81.5007 3.78242L81.4378 3.2864C81.3062 3.30309 81.1867 3.37135 81.1055 3.47618C81.0242 3.581 80.988 3.7138 81.0047 3.84535L81.5007 3.78242ZM78.6257 1.91284L90.1264 3.17821L90.2358 2.18421L78.7351 0.918843L78.6257 1.91284ZM79.3397 2.6399L79.1764 1.35292L78.1844 1.47877L78.3477 2.76575L79.3397 2.6399ZM70.2262 4.30006L78.9066 3.19885L78.7808 2.2068L70.1003 3.30801L70.2262 4.30006ZM81.7186 4.57241L70.2179 3.30704L70.1086 4.30104L81.6093 5.56641L81.7186 4.57241ZM81.0047 3.84535L81.1679 5.13233L82.16 5.00648L81.9967 3.7195L81.0047 3.84535ZM90.1182 2.18519L81.4378 3.2864L81.5636 4.27845L90.244 3.17724L90.1182 2.18519Z" fill="#282828"/>
              </svg>
              </div>
             
              <section className="thisIdeaStyle">
                <p><strong>Style |</strong> {idea.style}</p>
              </section>

              <section className="thisIdeaPlacement">
                <p><strong>Placement |</strong> {idea.placement}</p>
              </section>

              <section className="thisIdeaDetails">
                <p><strong>Other Details Below:</strong></p>
                <p>{idea.details}</p>
              </section>
              
              <br/>
            </div>
          );
        })}

      </section>
 
    </div>
  );
}; // end of IdeasPage function that allows the user to see their saved ideas.

export default IdeasPage;

// Previously used code:

{/* <button className="btn" onClick={() => handleEditIdea(idea)}>edit</button> */}

 {/* <button className="btn" onClick={() => deleteIdea(idea)}>delete</button> */}