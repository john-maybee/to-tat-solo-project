import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

///////////////////////////////////RegisterForm function///////////////////////////////////////
function RegisterForm() {
  const [username, setUsername] = useState(''); // the getter starts with a blank string as the username and a setter to take in the updated value
  const [password, setPassword] = useState(''); // the getter starts password as blank string and a setter for the password as well 
  const errors = useSelector((store) => store.errors); // use errors.reducer from the store
  const dispatch = useDispatch(); // uses dispatch from react-redux

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register New User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
} // end of RegisterForm function

export default RegisterForm;
