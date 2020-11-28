import { SEND_SUCCESS, SEND_FAIL } from '../constants/types';

const initialState = {
    item: [],
    error: null
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_SUCCESS:
            return {
                ...state,
                item: state.payload
            };
        case SEND_FAIL:
            return {
                ...state,
                error: state.payload
            };
        default:
            return state
    }
};

export default postReducer;