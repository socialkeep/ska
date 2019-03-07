import React from 'react';
import { Link } from 'react-router-dom';

const PostAndPhotoComponent = (props) => {

  return (
    <div className="PostAndPhotoComponent">
          <strong>Upload Photo</strong>
          <p>Choose An Image</p>
          <input className="item-upload" id="file" value={props.file} onChange={this.changePhoto} type="file" />
          <button className="addItemButton" onClick={this.createItem}>Add Item</button>

    </div>
  )
}

export default PostAndPhotoComponent;