import { all, spawn } from "redux-saga/effects";
import userSaga from './Users';
import postSaga from './Posts';

export default function* rootSaga () {
    const sagas = [userSaga, postSaga];

    yield all(sagas.map(s => spawn(s)))
}