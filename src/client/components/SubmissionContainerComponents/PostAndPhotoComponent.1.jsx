import React from 'react';
import { Link } from 'react-router-dom';

const PostAndPhotoComponent = (props) => {

  return (
    <div className="socialMediaComponent">
        <h1>SocialKeep</h1>
        <h2>Social Media Submissions</h2>

        <input id="socialMediaPostText" placeholder='Enter the text for your post here' onChange={props.handleChange} value={props.socialMediaPostText} type="text"/>

        <input className="item-upload" id="file" value={props.file} onChange={this.changePhoto} placeholder='Drag and drop image files here. Max size 5MB, .jpg format.' type="file" />
        
        <button><Link to={`submission/thankyou`} onClick={this.submitData}>Submit</Link></button>
    </div>
  )
}

export default PostAndPhotoComponent;