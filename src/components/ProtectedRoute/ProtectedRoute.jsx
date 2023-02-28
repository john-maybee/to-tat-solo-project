import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import {useSelector} from 'react-redux';

// A Custom Wrapper Component -- This will keep our code DRY.
// Responsible for watching redux state, and returning an appropriate component
// API for this component is the same as a regular route

// THIS IS NOT SECURITY! That must be done on the server
// A malicious user could change the code and see any view
// so your server-side route must implement real security
// by checking req.isAuthenticated for authentication
// and by checking req.user for authorization

function ProtectedRoute({ component, children, ...props }) {
  const user = useSelector((store) => store.user);

  // Component may be passed in as a "component" prop,
  // or as a child component.
  const ProtectedComponent = component || (() => children);

  // We return a Route component that gets added to our list of routes
  return (
    <Route
      // all props like 'exact' and 'path' that were passed in
      // are now passed along to the 'Route' Component
      {...props}
    >
      {user.id ?
        // If the user is logged in, show the protected component
        <ProtectedComponent />
        :
        // Otherwise, redirect to the Loginpage
        <LoginPage />
      }
    </Route>

  );
}

export default ProtectedRoute;

// This allows a logged in user to access the protected component.
// If user isn't logged in, they will be redirected to the LoginPage.
// Not the page that makes sure the user is authenticated, but it does act as a route for the authenticated.
// Need to make sure the authenticated users are still parsed through within the SERVER in order to protect the app information/code.