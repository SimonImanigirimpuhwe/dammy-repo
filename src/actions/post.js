import axios from 'axios';
import { FETCH_SUCCESS, FETCH_ERROR } from '../constants/types';

export const sendPost = (post) => (dispatch) => {
    axios
    .post('https://jsonplaceholder.typicode.com/posts', post)
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({
            type: FETCH_ERROR,
            payload: err.message
        })
    }) 
};