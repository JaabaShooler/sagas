import { combineReducers } from "redux";
import userReducer from "./Users";
import postReducer from "./Posts";

const initialState = {};

export const appReducer = (state = initialState, action) => {
    return state;
}

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    posts: postReducer
});

export default rootReducer;