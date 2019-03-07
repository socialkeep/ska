import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Link, BrowserRouter as Router } from 'react-router-dom';

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
      <Router>
        <div>
          <Link to="/submission">Submission Container</Link> 
          <Link to="/adminlogin">Admin Login</Link>     
          <Link to="/review">Review container</Link>     


          <Route 
            exact path='/submission'
            render={(props)=><SubmissionContainer/>}
          />
          {/* <Route
          exact path='/adminlogin'
          render={(props)=><SubmissionContainer/>}
        />
        <Route
          exact path='/review'
          render={(props)=><SubmissionContainer/>}
        />  */}

        </div>
       
      </Router>
    </div>
  )
}
export default connect(mapStateToProps, null)(MainContainer);

// export default withRouter(connect(mapStateToProps, null)(MainContainer));
