import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import * as actions from '../store/actions.js'

import ReviewStatusFiltersComponent from '../components/ReviewStatusFiltersComponent.jsx';
import CardComponent from '../components/CardComponent.jsx';


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

  handleFilter(event){
    fetch(`/${event.target.id}`,{
      method:'GET',
    })
    .then(
      res => res.json())
    .then((result) => {
      const data = {
        cardData: result,
        status: event.target.id
      }

      this.props.handleSelectFilter(data)
    }).catch(err => console.log(err))
  }


  render() {
    console.log(this.props);

    const { cardData } = this.props;

    const cardArray = [];

    for (let i = 0; i < cardData.length; i +=1 ) {
      cardArray.push(<CardComponent data={cardData[i]} />)
    }


    return (
      <div className="reviewContainer">
        <p>Hello from Review Container!</p>
        <ReviewStatusFiltersComponent 
         filterStatus={this.props.filterStatus}
         handleSelectFilter={this.props.handleSelectFilter}
        />
        {cardArray}
      </div>
    )  
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewContainer));
