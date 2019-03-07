import React from 'react';


const SocialMediaComponent = (props) => {

    return (
       <div className="socialMediaComponent">
          <h1>SocialKeep</h1>
          <h2>Social Media Submissions</h2>
          <h3>Please enter a social handle for the platforms you would like your post to be featured on.</h3>

          <input id="instagram" placeholder='Instagram' onChange={props.handleChange} value={props.instagram} type="text"/>

          <input id="facebook" placeholder='Facebook' onChange={props.handleChange} value={props.facebook} type="text"/>

          <input id="twitter" placeholder='Twitter' onChange={props.handleChange} value={props.twitter} type="text"/>
          
          <button><Link to={`${match.url}/postandphotodetails`}>Continue</Link></button>
      </div>

    )
}


export default SocialMediaComponent;