import React from 'react';
import { Link } from 'react-router-dom';


const ContactInfoComponent = (props) => {
  console.log("contact info component props", props)

    return (
      <div className="SubmissionComponents" className="PostAndPhotoComponent">

          <div className="level3Text">Please enter your contact details, <br></br> so we can share your social media post!</div>
          <br></br>

          <div className="formContent">

          <input className="inputContactDetails" id="firstName" placeholder='First Name' onChange={props.handleChange} type="text"/> 
          <br></br>

          <input className="inputContactDetails" id="lastName" placeholder='Last Name' onChange={props.handleChange} type="text"/>
          <br></br>

          <input className="inputContactDetails" id="email" placeholder='Email Address' onChange={props.handleChange} type="text"/>
          <br></br>

          <button className="standardBlueButton"><Link to={`/submission/socialmediadetails`}>Continue</Link></button>
          </div>
      </div>
    )
}


export default ContactInfoComponent;


// {props.validator.message('Cluster name', props.clusterName, 'required')}
