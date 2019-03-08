import React from 'react';
import { Switch, Route, withRouter, Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
// import logo from '../assets/SocialKeepLogo.png'

const NavigationComponent = (props) => {

  return (
    <div className="navigationComponent">

       {/* <div className="logo"></div> */}
       {/* <img src={logo} /> */}
        

         {/* <Link className="navigationComponentItem" to="/submission">Submission Container</Link>  */}
         {/* <Link className="navigationComponentItem" to="/adminlogin">Admin Login</Link>      */}
         {/* <Link className="navigationComponentItem" to="/review">Review container</Link>      */}

        {(props.isLoggedIn === false) && (
          <div className="navigationComponentItem">
          <Link className="navigationComponentItem" to="/adminlogin">Log In</Link>   
        </div>
        )}
        {(props.isLoggedIn === true) && (
          <div className="navigationComponentItem">
          <Link className="navigationComponentItem" to="/adminlogin">Log Out</Link>   
        </div>
        )}
    </div>
  )
}

export default NavigationComponent;