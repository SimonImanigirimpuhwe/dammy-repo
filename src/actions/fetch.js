import axios from 'axios';
import {FETCH_LOADING, FETCH_SUCCESS, FETCH_ERROR } from '../constants/types';

export const fetchPosts = () => ( dispatch) => {
    dispatch({ type: FETCH_LOADING})
    console.log('failed')
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        dispatch({ 
            type: FETCH_SUCCESS, 
            payload: res.data
            
        })
    })
    .catch((err) => {
        dispatch({
            type: FETCH_ERROR,
            payload: err.message
        })
    })   
};

// fetchPosts()