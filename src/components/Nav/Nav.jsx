import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import './logo.svg';
import { useSelector } from 'react-redux';
import { Cottage, InfoOutlined, AppRegistration } from "@mui/icons-material";

function Nav() {
  const user = useSelector((store) => store.user); // const representing the store.user to help with navigation depending on whether there is a user or not.

  return (
    <div className="nav">
      <Link to="/home">
        {/* <body><img src="tat2.png" alt="To Tat"/></body> */}
        {/* <h2 className="nav-title">To Tat</h2> */}
      
        <img src="logo.svg" alt="Logo for To Tat mobile website" role="img" />
        
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            <AppRegistration />
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              <Cottage />
            </Link>
          </>
        )}

        <Link className="navLink" to="/about">
          <InfoOutlined />
        </Link>

        {user.id && (
          <>
            <LogOutButton className="navLink" />
          </>
        )}

      </div>
    </div>
  );
}

export default Nav;


// Check class notes on authorization and authentication to make sure this file is correct.
// Is this where I should import the material-ui Icons that link to different pages? Yes
// Once working on the styling, make sure to insert the home icon on this page, along with the logout icon.