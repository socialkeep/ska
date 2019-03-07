import React from 'react';
import { Link } from 'react-router-dom';

const PostAndPhotoComponent = (props) => {
  console.log("------",props)
  const { match } = props.props;

  return (
    <div className="socialMediaComponent">
        <h1>SocialKeep</h1>
        <h2>Social Media Submissions</h2>

        <input id="socialMediaPostText" placeholder='Enter the text for your post here' onChange={props.handleChange} type="text"/>

        <input className="item-upload" id="file" onChange={props.changePhoto} placeholder='Drag and drop image files here. Max size 5MB, .jpg format.' type="file" />
        
        <button><Link to={`${match.url}/thankyou`} onClick={props.submitData}>Submit</Link></button>
    </div>
  )
}

export default PostAndPhotoComponent;