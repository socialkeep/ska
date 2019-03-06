import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavigationComponent from '../components/NavigationComponent';
import MainContainer from '../containers/MainContainer';

import * as actions from '../store/actions.js';

const mapStateToProps = store => ({
  isLoggedIn: store.userData.isLoggedIn
})

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="Nav">
      <NavigationComponent
       isLoggedIn={this.props.isLoggedIn}
       />
    </div>
  }
}

export default withRouter(connect(mapStateToProps, null)(NavigationContainer));
