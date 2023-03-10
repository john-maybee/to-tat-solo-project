import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>{user.username}'s Ink Pad</h2>
      <p>Create</p>
      <Link to="/create"><button className="btn_stretched">Enter New Idea</button></Link>
      <br />
      <p>View</p>
      <Link to="/ideas"><button className="btn_stretched">Tattoo Ideas</button></Link>
      <br />
      <br />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

// is this where we are supposed to enter in the home page information?
// Or do I need a seperate component for the home page?