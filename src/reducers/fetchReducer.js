import { FETCH_LOADING, FETCH_SUCCESS, FETCH_ERROR } from '../constants/types';

const initialState = {
    result: [],
    loading: false,
    error: null
};

const  fetchReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                result: action.payload,
                loading: false,
                error: null
            };
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default fetchReducer;