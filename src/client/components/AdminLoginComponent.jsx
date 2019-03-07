import React from 'react';


const AdminInfoComponent = (props) => {

    return (
      <div className="AdminLoginComponent">
        <h1>SocialKeep</h1>
        <h2>Administrator Login</h2>
        <h3>Please enter your login details.</h3>

        <input id="emailAddress" placeholder='Email Address' onChange={props.handleChange} value={props.email} type="text"/>

        <input id="password" placeholder='Password' onChange={props.handleChange} value={props.password} type="text"/>   
        <div className='aws_cluster_form_container_button'>

        <button className='buttons'>Submit</button>
      </div>    




      </div>
    )
}


export default AdminInfoComponent;

// {props.validator.message('Role name', props.iamRoleName, 'required')}

//onClick={props.handleConfigAndMakeNodes} 