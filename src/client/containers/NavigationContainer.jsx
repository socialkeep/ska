import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavigationComponent from '../components/NavigationComponent.jsx';

import * as actions from '../store/actions.js';

const mapStateToProps = store => ({
  isLoggedIn: store.userData.isLoggedIn
})

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="Nav">
      <NavigationComponent
       isLoggedIn={this.props.isLoggedIn}
       />
    </div>
    )
  }
}

export default connect(mapStateToProps, null)(NavigationContainer);
// export default withRouter(connect(mapStateToProps, null)(NavigationContainer));
