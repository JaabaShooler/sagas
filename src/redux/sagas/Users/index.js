import { apply, call, put, takeEvery } from "redux-saga/effects";
import { LOAD_USERS, LOAD_USERS_SUCCESS } from "../../reducers/Users/actions";

export function* loadUserList () {
    const request = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const data = yield apply(request, request.json);
    yield put({
        type: LOAD_USERS_SUCCESS,
        payload: data,
    })
}

export default function* userSaga() {
    yield takeEvery(LOAD_USERS, loadUserList);
}