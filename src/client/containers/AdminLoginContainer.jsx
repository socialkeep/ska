import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';

import AdminLoginComponent from '../components/AdminLoginComponent.jsx';


const mapStateToProps = store => ({
  isLoggedIn: store.userData.isLoggedIn,
  email: store.userData.email,
  password: store.userData.password
})


const mapDispatchToProps = (dispatch) => ({
  handleTextChange: (data) => {
    dispatch(actions.handleTextChange(data))
  }
})

class AdminLoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  changeText(e){
    const data = { id: e.target.id, text: e.target.value }
    this.props.handleTextChange(data);
  }

  verifyLogIn()




  render() {
    return (
      <div className="adminLoginContainer">
        <AdminLoginComponent 
        isLoggedIn={this.props.isLoggedIn}
        email={this.props.email}
        password={this.props.password}
        />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminLoginContainer));