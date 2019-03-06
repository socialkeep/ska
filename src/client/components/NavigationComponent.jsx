import React from 'react';
imoprt { Link } from 'react-router-dom';

const NavigationComponent = (props) => {



  return (
    <div className="navigationComponent">
      {props.isLoggedIn === false }

      <div className="navigationComponentItem">
        <Link to="/">Log In</Link>
      </div>
    </div>
  )
}