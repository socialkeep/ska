import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Link, BrowserRouter as Router } from 'react-router-dom';
import * as actions from '../store/actions.js'

import ContactInfoComponent from '../components/SubmissionContainerComponents/ContactInfoComponent.jsx';
import SocialMediaComponent from '../components/SubmissionContainerComponents/SocialMediaComponent.jsx';
import PostAndPhotoComponent from '../components/SubmissionContainerComponents/PostAndPhotoComponent.jsx';
import ThankYouComponent from '../components/SubmissionContainerComponents/ThankYouComponent.jsx';

const mapStateToProps = (store) => ({
  firstName: store.formData.firstName,
  lastName: store.formData.lastName,
  email: store.formData.email,

  instagram: store.formData.instagram,
  facebook: store.formData.facebook,
  twitter: store.formData.twitter,

  socialMediaPostText: store.formData.socialMediaPostText,
  file: store.formData.file,
})

const mapDispatchToProps = (dispatch) => ({
  handleTextChange: (data) => {
    dispatch(actions.handleTextChange(data))
  }
})
 
class SubmissionContainer extends Component {
  constructor(props) {
    super(props);
    console.log("submission props",props)
    this.changePhoto = this.changePhoto.bind(this);
    this.createItem = this.createItem.bind(this);
  }
  

  changePhoto(e){
    const data = { 
      id: e.target.id, 
      text: e.target.value 
    }
    this.props.handleTextChange(data);
  }

  handleChange(e){
    this.props.handleTextChange
  }

  //createPhoto
  createItem(){
    const body = this.state;
    let formBody = new FormData();
    Object.keys(body).map(key => {
      formBody.append(key, body[key]);
    });
   
    fetch('/api/addPhoto', {
      method: 'POST',
      body: formBody
    })
    .then(
      res => res.json())
    .then((result) => {
      console.log(result);
      // const fav = JSON.parse(result);
    });
  }

  submitData(){
    const postData = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,

      instagram: this.props.instagram,
      facebook: this.props.facebook,
      twitter: this.props.twitter,

      socialMediaPostText: this.props.socialMediaPostText,
      file: this.props.file
    }

    fetch('/postContent', {
      method: 'POST',
      body: postData
    })
    .then(
      res => res.json())
    .then((result) => {
      console.log(result);
    })

  }


  render() {
    const { match } = this.props;
    console.log("match??", match)

    return (
      <div className="submissionContainer">
      <Router>
        <div>
        <h1>SocialKeep</h1>
        <h2>Social Media Submissions</h2>
          <div className='button'>
                <Link to={`${match.url}/contactdetails`}>Contact Details</Link>     
          </div>
          <div className='button'>
                <Link to={`${match.url}/socialmediadetails`}>Social Media Details</Link>     
          </div>
          <div className='button'>
                <Link to={`${match.url}/postandphotodetails`}>Post and Photo Details</Link>     
          </div>
          <div className='button'>
                <Link to={`${match.url}/thankyou`}>Thank You</Link>     
          </div>


          <Route 
              path={`${match.path}/contactdetails`}
              render={(props)=><ContactInfoComponent props={props}/>}
          /> 
          <Route
              path={`${match.path}/socialmediadetails`}
              render={(props)=><SocialMediaComponent props={props}/>}
          />
          <Route
              path={`${match.path}/postandphotodetails`}
              render={(props)=><PostAndPhotoComponent props={props}/>}  
          /> 
          <Route
              path={`${match.path}/thankyou`}
              component={ThankYouComponent}
          />   
        </div>
      </Router>
      </div>
    )  
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(SubmissionContainer);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmissionContainer));


  //  {/* render= {(props) => 
  //                   <ContactInfoComponent {...props} 
  //                    firstName={this.props.firstName}
  //                    lastName={this.props.lastName}
  //                    email={this.props.email}
  //                    />
  //                    } */}






  //  <Route
  //           exact path='/socialmediadetails'
  //           render={(props)=><SocialMediaComponent {...props}
  //                   instagram={this.props.instagram}
  //                   facebook={this.props.facebook}
  //                   twitter={this.props.twitter}
  //                   file={this.props.file}
  //                   changePhoto={this.changePhoto}
  //                   />
  //                   }
  //         />
  //         <Route 
  //           exact path='/postandphotodetails'
  //           render={(props) => <PostAndPhotoComponent
  //                   socialMediaPostText= {this.props.socialMediaPostText}
  //                   image= {this.props.image}
  //                   />
  //                   }
  //         />
  //         <Route 
  //           exact path='/thankyou'
  //           component={ThankYouComponent}
  //         />   