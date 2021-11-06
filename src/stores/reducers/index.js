import {combineReducers} from 'redux';
import userReducer from './UserReducer';
//insert another reducers here to be combined

const reducers = combineReducers({
  userReducer,
});

export default reducers;
