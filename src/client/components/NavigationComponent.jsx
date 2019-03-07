import React from 'react';
import { Link } from 'react-router-dom';

const NavigationComponent = (props) => {

  return (
    <div className="navigationComponent">
      {(props.isLoggedIn === false) && (
        <div className="navigationComponentItem">
        <Link to="/review">Log In</Link>
      </div>
      )}
      {(props.isLoggedIn === true) && (
        <div className="navigationComponentItem">
        <Link to="/review">Log Out</Link>
      </div>
      )}
    </div>
  )
}

export default NavigationComponent;