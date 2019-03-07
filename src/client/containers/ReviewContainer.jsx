import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import * as actions from '../store/actions.js'

import ReviewComponent from '../components/ReviewStatusFiltersComponent.jsx';


const mapStateToProps = (store) => ({
  filterStatus: store.cardData.filterStatus,
  cardData: store.cardData.cardData
})

const mapDispatchToProps = (dispatch) => ({
  handleSelectFilter: (data) => {
    dispatch(actions.handleSelectFilter(data))
  }
})
 
class ReviewContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleSelectFilter(e){

    this.props.handleSelectFilter(e.target.id)
  }


  



  render() {
    console.log(this.state);
    return (
      <div className="reviewContainer">
        <p>Hello from Review Container!</p>
        <ReviewComponent />
        <CardComponent />
          
      </div>
    )  
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewContainer));
