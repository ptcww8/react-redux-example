import {
  SET_TAGLINE
} from "../actions/actionTypes";

// define initial state of head
const initialState = {
  tagline: 'Demo application created in React App!'
}

// update store based on type and payload and return the state
export default function common(state = initialState, action) {
  switch (action.type) {
    case SET_TAGLINE:
      const { tagline } = action.payload;
      return {
        ...state,
        tagline
      }
    default:
      return state
  }
}