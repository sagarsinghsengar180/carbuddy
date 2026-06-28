import { all } from "redux-saga/effects";
import CategorySaga from "./CatagorySaga";
export default function* RootSaga(){
    yield all ([
        CategorySaga(),
    ])
}
