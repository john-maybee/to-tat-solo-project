import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { Button } from '@mui/material';
import { AddRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import "@fontsource/roboto";
import './UserPage.css';

function UserPage() {

  const user = useSelector((store) => store.user);
  return (
    <div className="container">

      <h2 className="header_pad" >
        {user.username}'s Ink Pad
      </h2>
    <div className="add_section">
      <Button 
        className="mui_btn" 
        variant="contained"
        // size="large"
        endIcon={<AddRounded />} 
        sx={{ 
       
          // border: "1px dotted #282828", 
          backgroundColor: '#E1AD01', 
          color: "#282828", 
          width: "100%", 
          "&:active": {backgroundColor: "#fcf7e6"}, 
          "&:hover": {backgroundColor:"#80a9a4"} 
        }}>
          <Link className="mui_link" to="/create">
            Add New Tattoo Idea
          </Link>
      </Button>

      <br />
      <br />

      <Button 
        className="mui_btn" 
        variant="contained"
        // size="large"
        endIcon={<AddRounded />} 
        sx={{ 
       
          // border: "1px dotted #282828", 
          backgroundColor: '#E1AD01', 
          color: "#282828", 
          width: "100%", 
          "&:active": {backgroundColor: "#fcf7e6"}, 
          "&:hover": {backgroundColor:"#80a9a4"} 
        }}>
          <Link className="mui_link" to="/createartist">
            Add New Artist
          </Link>
      </Button>
    </div>
    
    <div className="view_section">
      <Button 
        className="mui_btn" 
        variant="contained"
        // size="large"
        endIcon={<ArrowForwardIosRounded />}
        sx={{ 
  
          // border: "1px dotted #282828", 
          backgroundColor: '#E1AD01', 
          color: "#282828", 
          width: "100%", 
          "&:active": {backgroundColor: "#fcf7e6"}, 
          "&:hover": {backgroundColor:"#80a9a4"} 
        }}>
          <Link className="mui_link" to="/ideas">
            View My Tattoo Ideas
            
          </Link>
      </Button>

      <br />
      <br />

      <Button 
        className="mui_btn" 
        variant="contained"
        // size="large"
        endIcon={<ArrowForwardIosRounded />}
        sx={{ 
  
          // border: "1px dotted #282828", 
          backgroundColor: '#E1AD01', 
          color: "#282828", 
          width: "100%", 
          "&:active": {backgroundColor: "#fcf7e6"}, 
          "&:hover": {backgroundColor:"#80a9a4"} 
        }}>
          <Link className="mui_link" to="/artists">
            View My Saved Artists
          </Link>
      </Button> 
    </div>    
      
    </div>
  );
}

export default UserPage;

