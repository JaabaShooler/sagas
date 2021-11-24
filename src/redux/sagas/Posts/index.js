import { apply, call, put, takeEvery } from "redux-saga/effects";
import { LOAD_POSTS, LOAD_POSTS_SUCCESS } from "../../reducers/Posts/actions";

export function* loadPostList () {
    const request = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const data = yield apply(request, request.json);
    yield put({
        type: LOAD_POSTS_SUCCESS,
        payload: data,
    })
}

export default function* postSaga() {
    yield takeEvery(LOAD_POSTS, loadPostList);
}