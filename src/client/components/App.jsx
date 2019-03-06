  import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file:''
    }
    this.changePhoto = this.changePhoto.bind(this);
    this.createItem = this.createItem.bind(this);
  }

  changePhoto(e){
    this.setState({file:e.target.files[0]});
  }

  createItem(){
    const body = this.state;
    let formBody = new FormData();
    Object.keys(body).map(key => {
      formBody.append(key, body[key]);
    });
   
    fetch('/api/addPhoto',{
      method:'POST',
      body: formBody
    })
    .then(
      res => res.json())
    .then((result) => {
      console.log(result);
      // const fav = JSON.parse(result);
    });
  }

  render() {
    console.log(this.state);
      return (
      <div>
        <br />
          <strong>Upload Photo</strong>
            {/* Photo URL: */}
          {/* <input className="item-image" id="image" onChange={this.handleChange} type="url" /> */}
            {/* -OR- */}
          <br />
            Choose an Image 
          <br />
          <input className="item-upload" id="file" onChange={this.changePhoto} type="file" />
          <div>
          <button className="addItemButton" onClick={this.createItem}>Add Item</button>
        </div>
      </div>
    );
  }
}

export default App;

