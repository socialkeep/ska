import React from 'react';
import { Link } from 'react-router-dom';


const ContactInfoComponent = (props) => {
  console.log("contact info component props", props)

    return (
      <div className="SubmissionComponents">

          <div className="level3Text">Please enter your contact details, <br></br> so we can share your social media post!</div>
          <br></br>

          <div className="formContent">

          <input className="inputContactDetails" id="firstName" placeholder='First Name' onChange={props.handleChange} type="text"/> 
          <br></br>

          <input className="inputContactDetails" id="lastName" placeholder='Last Name' onChange={props.handleChange} type="text"/>
          <br></br>

          <input className="inputContactDetails" id="email" placeholder='Email Address' onChange={props.handleChange} type="text"/>
          <br></br>

          <Link to="/submission/socialmediadetails"><button className="standardBlueButton">Continue</button></Link>
          </div>
      </div>
    )
}


export default ContactInfoComponent;


// {props.validator.message('Cluster name', props.clusterName, 'required')}
