import React from 'react';
import { Link } from 'react-router-dom';


const SocialMediaComponent = (props) => {

    return (
       <div className="socialMediaComponent">
          <h1>SocialKeep</h1>
          <h2>Social Media Submissions</h2>
          <h3>Please enter a social handle for the platforms you would like your post to be featured on.</h3>

          <input className="inputContactDetails" id="instagram" placeholder='Instagram' onChange={props.handleChange} value={props.instagram} type="text"/>
          <br></br>

          <input className="inputContactDetails" id="facebook" placeholder='Facebook' onChange={props.handleChange} value={props.facebook} type="text"/>
          <br></br>

          <input className="inputContactDetails" id="twitter" placeholder='Twitter' onChange={props.handleChange} value={props.twitter} type="text"/>
          <br></br>
          
          <button className="standardBlueButton"><Link to={`/submisssion/postandphotodetails`}>Continue</Link></button>
      </div>

    )
}


export default SocialMediaComponent;