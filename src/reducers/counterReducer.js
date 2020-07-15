import {
  INCREMENT, DECREMENT, RESET,
  SET_COUNTER_TITLE
} from "../actions/actionTypes";

// define initial state of counter
const initialState = {
  counterTitle: 'Counter',
  count: 0
}

// update store based on type and payload and return the state
export default function common(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 2
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 2
      };
    case RESET:
      return {
        ...state,
        count: 0
      };
    case SET_COUNTER_TITLE:
      const { title } = action.payload;
      return {
        ...state,
        counterTitle: title
      }
    default:
      return state
  }
}