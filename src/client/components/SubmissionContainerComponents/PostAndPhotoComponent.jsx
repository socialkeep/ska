import React from 'react';
import { Link } from 'react-router-dom';

const PostAndPhotoComponent = (props) => {
  return (
    <div className="SubmissionComponents">

    <br></br>
    <div className="formContent">

        <input className="postInputField" id="socialMediaPostText" placeholder='Enter the text for your post here' onChange={props.handleChange} type="text"/>

        <div className="uploadContainer">

        <div className="level3Text">Drag and drop image files here.<br></br> Max size 5MB, .jpg format.</div>
        <br></br>

          <input className="item-upload" id="file" onChange={props.changePhoto} type="file" />

        </div>
        
        <Link to={`/submission/thankyou`} onClick={props.submitData}><button className="standardBlueButton">Submit</button></Link>

    </div>
    </div>
  )
}

export default PostAndPhotoComponent;