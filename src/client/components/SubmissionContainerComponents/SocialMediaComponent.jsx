import React from 'react';
import { Link } from 'react-router-dom';


const SocialMediaComponent = (props) => {
    console.log("SM component", props);
    const { match } = props.props;

    return (
       <div className="SubmissionComponents">

        <div className="level3Text">Please enter a social handle for the platforms<br></br> you would like your post to be featured on.</div>
        <br></br>

        <div className="formContent">

          <input className="inputContactDetails" id="instagram" placeholder='Instagram' onChange={props.handleChange} value={props.instagram} type="text"/>
          <br></br>

          <input className="inputContactDetails" id="facebook" placeholder='Facebook' onChange={props.handleChange} value={props.facebook} type="text"/>
          <br></br>

          <input className="inputContactDetails" id="twitter" placeholder='Twitter' onChange={props.handleChange} value={props.twitter} type="text"/>
          <br></br>
        
          <Link to={`/submission/postandphotodetails`}><button className="standardBlueButton">Continue</button></Link>

        </div>

      </div>

    )
}


export default SocialMediaComponent;