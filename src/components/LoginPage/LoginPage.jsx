import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

///////////////////////////////////LoginPage function///////////////////////////////////////
function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
} // end of LoginPage function that takes in the LoginForm and supplies a button that takes you to the registration page

export default LoginPage;

// This page imports the LoginForm and gives it a button that can take you to the registration page when clicked.
// Input to login is within the LoginForm that is imported.