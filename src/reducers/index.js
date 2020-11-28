import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import postReducer from './postReducer';


const combinedReducers = combineReducers({
    data: fetchReducer,
    items: postReducer
});

export default combinedReducers;

