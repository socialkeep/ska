import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import * as actions from '../store/actions.js'

import ReviewComponent from '../components/ReviewComponent.jsx';


const mapStateToProps = (store) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})
 
class ReviewContainer extends Component {
  constructor(props) {
    super(props);


  }
  



  render() {
    console.log(this.state);
    return (
      <div className="reviewContainer">
        <p>Hello from Review Container!</p>
        <ReviewComponent />
          
      </div>
    )  
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewContainer));
