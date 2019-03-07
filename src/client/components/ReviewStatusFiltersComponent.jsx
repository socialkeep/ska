import React from 'react';


const ReviewStatusFiltersComponent = (props) => {

    return (
      <div className="reviewStatusFiltersComponent">
            <p>ReviewStatusFiltersComponent</p>
            <button className="tabs" id="pending" onClick={props.handleSelectFilter}>PENDING</button> 
            <button className="tabs" id="accepted" onClick={props.handleSelectFilter}>ACCEPTED</button>  
            <button className="tabs" id="rejected" onClick={props.handleSelectFilter}>REJECTED</button>  
            <button className="tabs" id="posted" onClick={props.handleSelectFilter}>POSTED</button>  

      </div>
    )
}


export default ReviewStatusFiltersComponent;