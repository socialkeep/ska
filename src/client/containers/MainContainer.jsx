import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import SubmissionContainer from './SubmissionContainer.jsx';
import AdminLoginContainer from './AdminLoginContainer.jsx';
import ReviewContainer from './ReviewContainer.jsx'

const mapStateToProps = store => ({
  isLoggedIn: store.userData.isLoggedIn
})

const MainContainer = (props) => {
  return (
    <div className="mainContainer">
      <p>Hello from Main Container!</p>
      <Switch>
        <Route 
          exact path='/'
          component={SubmissionContainer}
        />
        <Route
          exact path='/adminlogin'
          component={AdminLoginContainer}
        />
        <Route
          exact path='/review'
          component={ReviewContainer}
        />
      </Switch>
    </div>
  )
}

export default withRouter(connect(mapStateToProps, null)(MainContainer));
