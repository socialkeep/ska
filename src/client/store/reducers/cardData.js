import * as types from '../actionTypes';


//todo fix image
const initialState = {
  
}

const cardDataReducer = (state = initialState, action) => {
  let newState;

  switch(action.type) {
    // case types.HANDLE_TEXT_CHANGE:
    //   // newState = state.slice();
    //   // newState[data.id] = data.text;
    //   return newState;
    default:
      return state;
  }
}

export default cardDataReducer;