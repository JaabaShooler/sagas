import {LOAD_POSTS, LOAD_POSTS_ERROR, LOAD_POSTS_SUCCESS} from './actions';

const initialState = {
    loading: false,
    error: false,
    data: null,
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_POSTS: {
            return {
                ...state,
                loading: true,
            };
        }

        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }

        case LOAD_POSTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }

        default:
            return state;
    }
}