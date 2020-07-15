import {
  SET_TAGLINE
} from "./actionTypes";
 
// to set the tagline in header
export const setTagline = tagline => {
  return {
    type: SET_TAGLINE,
    payload: {
      tagline
    }
  }
}