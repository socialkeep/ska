<<<<<<< HEAD
  import React, { Component } from 'react';
  import Dropzone from 'react-dropzone'

  // function Previews(props) {
  //   const [files, setFiles] = useState([])
  //   const {getRootProps, getInputProps} = useDropzone({
  //     accept: 'image/*',
  //     onDrop: acceptedFiles => {
  //       setFiles(acceptedFiles.map(file => Object.assign(file, {
  //         preview: URL.createObjectURL(file)
  //       })))
  //     }
  //   })
    
  //   const thumbs = files.map(file => (
  //     <div style={thumb} key={file.name}>
  //       <div style={thumbInner}>
  //         <img
  //           src={file.preview}
  //           style={img}
  //         />
  //       </div>
  //     </div>
  //   ))
  
  //   useEffect(() => () => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach(file => URL.revokeObjectURL(file.preview))
  //   }, [files])
  
  //   return (
  //     <section>
  //       <div {...getRootProps()}>
  //         <input {...getInputProps()} />
  //         <p>Drag 'n' drop some files here, or click to select files</p>
  //       </div>
  //       <aside style={thumbsContainer}>
  //         {thumbs}
  //       </aside>
  //     </section>
  //   )
  // }
  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file:''
    }
    this.changePhoto = this.changePhoto.bind(this);
    this.createItem = this.createItem.bind(this);
    // this.onDrop = this.onDrop.bind(this);
  }

  // onDrop(files) {
  //   // POST to a test endpoint for demo purposes
  //   console.log(files);
  // }


  changePhoto(file){
    if(Array.isArray(file)){
      this.setState({file:file});
    }
    else{
      const files = [file.target.files[0]]
      this.setState({file:files});

    }
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
          <div>
            <Dropzone onDrop={acceptedFiles => this.changePhoto(acceptedFiles)}>
              {({getRootProps}) => (
                <div {...getRootProps()}>
                  <p>Drop files here, or click to select files</p>
                </div>
              )}
            </Dropzone>
            {/* <Previews/> */}
          </div>
          <input className="item-upload" id="file" onChange={this.changePhoto} type="file" />
          {/* <div>{this.state.file.map((file) => {
            {console.log(file.path)}
          <img key ={file.path} src={file.path} /> 
          })}</div> */}
          <div>
          <button className="addItemButton" onClick={this.createItem}>Add Item</button>
=======
import React , { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationContainer from '../containers/NavigationContainer.jsx';
import MainContainer from '../containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Router>
        <div>
          <NavigationContainer />
          <MainContainer />
>>>>>>> 7d7fcf2380693ab6ded5a9bd92ab64a18abac159
        </div>
      </Router>
    )
  }

}

export default App;