import {
  INCREMENT, DECREMENT, RESET,
  SET_COUNTER_TITLE
} from "./actionTypes";

// to increment the counter
export const incrementCounter = () => ({ type: INCREMENT });

// to decrement the counter
export const decrementCounter = () => ({ type: DECREMENT });

// to reset the counter
export const resetCounter = () => ({ type: RESET });

// to set counter title
export const setCounterTitle = titleText => {
  return {
    type: SET_COUNTER_TITLE,
    payload: {
      title: titleText
    }
  }
}