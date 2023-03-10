import React from 'react';
import { useDispatch } from 'react-redux';
import { Logout } from "@mui/icons-material";

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      <Logout />
    </button>
  );
}

export default LogOutButton;

// This appears on multiple components throughout the application.
// Styling changes depending on the component it is used in.
// Allows user to logout.