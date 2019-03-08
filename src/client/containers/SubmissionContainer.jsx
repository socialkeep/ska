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
  },
  addPhoto: (data) => {
    dispatch(actions.addPhoto(data))
  }
})
 
class SubmissionContainer extends Component {
  constructor(props) {
    super(props);
    console.log("submission props",props)
    this.changePhoto = this.changePhoto.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  changePhoto(e){
    this.props.addPhoto(e.target.files[0]);
  }

  handleChange(e){
    e.preventDefault();
    console.log("----")
    this.props.handleTextChange({ id:e.target.id, text:e.target.value });
  }

  //createPhoto
  createPhoto(e){
    const body = e.target.files[0];
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

    console.log("SUBMIT DATA data ", postData)

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
    console.log("ksdfhkjdsh")
    const { match } = this.props;
    const { handleTextChange } = this.props;
    console.log("match??", this.props)

    return (
      <div className="card">
        <div className="submissionContainer">
          <div className="level2Text">Social Media Submissions</div>

        <Router>
          <div>
            

          <Route 
              exact path={'/' || `/submission/contactdetails`}
              render={(props)=><ContactInfoComponent 
                props={props} 
                handleChange={this.handleChange}
                firstName={this.props.firstName}
                lastName={this.props.lastName}
                email={this.props.email}          
                />}
                  
            /> 
            <Route
                path={`/submission/socialmediadetails`}
                render={(props)=><SocialMediaComponent 
                props={props} 
                handleChange={this.handleChange}
                firstName={this.props.firstName}
                lastName={this.props.lastName}
                email={this.props.email}          
                />}
                
            /> 
            {/* <Route
                path={`/submission/socialmediadetails`}
                render={(props)=><SocialMediaComponent 
                props={props} 
                handleChange={this.handleChange}
                instagram={this.props.Instagram}
                facebook={this.props.Facebook}
                twitter={this.props.Twitter}
                />}
            /> */}
            <Route
                path={`/submission/postandphotodetails`}
                render={(props)=><PostAndPhotoComponent 
                  props={props}
                  handleChange={this.handleChange}
                  changePhoto={this.changePhoto}
                  submitData={this.submitData}
                  // file={this.props.file}
                />}
            /> 
            <Route
                path={`/submission/thankyou`}
                component={ThankYouComponent}
          />   
        </div>
      </Router>

      <div className="level4Text">Questions? Contact Social Keep at social@socialkeep.io.</div>
      </div>
      </div>
    )  
  }
}



// export default connect(mapStateToProps, mapDispatchToProps)(SubmissionContainer);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmissionContainer));



{/* <div className='button'>
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
            </div> */}

  //  {/* render= {(props) => 
  //                   <ContactInfoComponent {...props} 
  //                    firstName={this.props.firstName}
  //                    lastName={this.props.lastName}
  //                    email={this.props.email}
  //                    />
  //                    } */}






  // // <Route
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