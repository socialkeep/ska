import React from 'react';
import { Link } from 'react-router-dom';


const ContactInfoComponent = (props) => {
  console.log("contact info component props", props)

    return (
      <div className="PostAndPhotoComponent">
          <h1>SocialKeep</h1>
          <h2>Social Media Submissions</h2>
          <h3>Please enter your contact details, so we can share your social media post!</h3>

          <input className="inputContactDetails" id="firstName" placeholder='First Name' onChange={props.handleTextChange} value={props.firstName} type="text"/>
          <br></br>

          <input className="inputContactDetails" id="lastName" placeholder='Last Name' onChange={props.handleChange} value={props.lastName} type="text"/>
          <br></br>

          <input className="inputContactDetails" id="email" placeholder='Email Address' onChange={props.handleChange} value={props.email} type="text"/>
          <br></br>

          <button className="standardBlueButton"><Link to={`/submission/socialmediadetails`}>Continue</Link></button>
      </div>
    )
}


export default ContactInfoComponent;


// {props.validator.message('Cluster name', props.clusterName, 'required')}
