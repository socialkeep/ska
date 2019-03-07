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
      return {
        ...state,
        filterStatus: action.payload.status,
        cardData: action.payload.cardData
      }
    default:
      return state;
  }
}

export default cardDataReducer;