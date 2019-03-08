import React from 'react';


const AdminInfoComponent = (props) => {

    return (
      <div className="AdminLoginComponent">

        <div className="level2Text">Administrator Login</div>
        <br></br>
        <div className="level3Text">Please enter your login details.</div> 
        <br></br>

        <div className="formContent">


        <input className="inputContactDetails" id="emailAddress" placeholder='Email Address' onChange={props.handleChange} value={props.email} type="text"/>
        <br></br>

        <input className="inputContactDetails" id="password" placeholder='Password' onChange={props.handleChange} value={props.password} type="text"/>   
        <br></br>

        <button className="standardBlueButton">Submit</button>

        </div>
        <br></br><br></br>

      <div className="level4Text">Questions? Contact Social Keep at social@socialkeep.io.</div>


      </div>    

    )
}


export default AdminInfoComponent;

// {props.validator.message('Role name', props.iamRoleName, 'required')}

//onClick={props.handleConfigAndMakeNodes} 