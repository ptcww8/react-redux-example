import { combineReducers } from 'redux';
import counter from './counterReducer';
import head from './headReducer';
import user from './userReducer';
 
// to combine all reducers together
const appReducer = combineReducers({
  counter,
  head,
  user
});
 
export default appReducer;