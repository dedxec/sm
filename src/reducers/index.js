/**
 * Created by taranjeetsingh on 16/04/17.
 */
import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
export default combineReducers({
    auth : AuthReducer
});