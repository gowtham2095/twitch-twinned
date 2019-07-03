import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formRedcuer } from 'redux-form';
export default combineReducers({
  auth: authReducer,
  form: formRedcuer
})