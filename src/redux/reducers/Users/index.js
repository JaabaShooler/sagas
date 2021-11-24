import {LOAD_USERS, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS} from './actions';

const initialState = {
    loading: false,
    error: false,
    data: null,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS: {
            return {
                ...state,
                loading: true,
            };
        }

        case LOAD_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }

        case LOAD_USERS_ERROR: {
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