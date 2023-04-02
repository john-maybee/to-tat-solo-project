import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

///////////////////////////////////LandingPage function///////////////////////////////////////
function LandingPage() {
  const [heading, setHeading] = useState('Welcome to To Tat');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">

      <div className="grid">
      
        <div className="grid-col grid-col_9">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
} // end of LandingPage function

export default LandingPage;



// Previously used elements:

{/* <h2>{heading}</h2> */}
{/* <div className="grid-col grid-col_8">
  
</div> */}
