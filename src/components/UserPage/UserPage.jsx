import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { Button } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">

      <h2 className="header_pad" >
        {user.username}'s Ink Pad
      </h2>

      <Button 
        className="mui_btn" 
        variant="contained" 
        sx={{ 
          border: "1px solid #282828", 
          backgroundColor: '#E1AD01', 
          color: "#282828", 
          width: "100%", 
          "&:active": {backgroundColor: "#fcf7e6"}, 
          "&:hover": {backgroundColor:"#80a9a4"} 
        }}>
          <Link className="mui_link" to="/create">
            Create New Tattoo
          </Link>
      </Button>

      <br />
      <br />

      <Button 
        className="mui_btn" 
        variant="contained" 
        sx={{ 
          border: "1px solid #282828", 
          backgroundColor: '#E1AD01', 
          color: "#282828", 
          width: "100%", 
          "&:active": {backgroundColor: "#fcf7e6"}, 
          "&:hover": {backgroundColor:"#80a9a4"} 
        }}>
          <Link className="mui_link" to="/ideas">
            My Tattoo Ideas
          </Link>
      </Button>

      {/* <br />
      <br /> */}
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

// Have two commented out breaks that will be used if the stretch goal of adding artists is reached.