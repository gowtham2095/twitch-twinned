import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import { reducer as formRedcuer } from 'redux-form';
export default combineReducers({
  auth: authReducer,
  form: formRedcuer,
  streams: streamReducer
})