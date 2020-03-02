import * as actionTypes from "../Actions/types";

const initialCountState = {
    count: 0,
  };


const count_reducer = (state = initialCountState, action) => {
    switch (action.type) {
      case actionTypes.INC:
        return {
          count: action.payload.count+1,
        };
      case actionTypes.DEC:
        return {
            count: action.payload.count-1,
          };
      default:
        return state;
    }
  };


  export default count_reducer;