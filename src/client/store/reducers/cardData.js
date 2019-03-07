import * as types from '../actionTypes';
import * as constants from '../../constants';


const initialState = {
  filterStatus: constants.PENDING,
  cardData: []
}

const cardDataReducer = (state = initialState, action) => {
  let newState;

  switch(action.type) {
    case types.SELECT_FILTER:
      newState = state.slice();
      newState[filterStatus] =  action.payload.status;
      newState[cardData] = action.payload.cardData;
      return newState;
   
    default:
      return state;
  }
}

export default cardDataReducer;