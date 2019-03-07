import React from 'react';


const AdminInfoComponent = (props) => {

    return (
      <div className="AdminLoginComponent">
        <h1>SocialKeep</h1>
        <h2>Administrator Login</h2>
        <h3>Please enter your login details.</h3>

        <input className="inputContactDetails" id="emailAddress" placeholder='Email Address' onChange={props.handleChange} value={props.email} type="text"/>
        <br></br>

        <input className="inputContactDetails" id="password" placeholder='Password' onChange={props.handleChange} value={props.password} type="text"/>   
        <br></br>

        <button className="standardBlueButton">Submit</button>
      </div>    

    )
}


export default AdminInfoComponent;

// {props.validator.message('Role name', props.iamRoleName, 'required')}

//onClick={props.handleConfigAndMakeNodes} 