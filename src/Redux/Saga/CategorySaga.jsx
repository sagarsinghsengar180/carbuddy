// import { put, takeEvery } from "redux-saga/effects"
// import { createMultipleRecord, createRecord, deleteRecord, getRecord, updateMuhltipleRecord, updateRecord } from "../Service/Index"
// import { CREATE_CATEGORY, CREATE_CATEGORY_RED, DELETE_CATEGORY, DELETE_CATEGORY_RED, GET_CATEGORY, GET_CATEGORY_RED, UPDATE_CATEGORY, UPDATE_CATEGORY_RED } from "../../Constants"



// function* createSaga(action) {
//    let response = yield createRecord("catEgory", action)
//    // let response = yield createMultipleRecord ("catEgory" , action)
//    yield put({ type: CREATE_CATEGORY_RED, payload: response })
// }
// function* getSaga(action) {
//    let response = yield getRecord("catEgory")
//    yield put({ type: GET_CATEGORY_RED, payload: response })
// }
// function* updateSaga(action) {
//    yield updateRecord("catEgory", action)
//    yield put({ type: UPDATE_CATEGORY_RED, payload: action.payload })
//    //  let response = yield updateMuhltipleRecord ("catEgory", action)
//    // yield put({ type: UPDATE_CATEGORY_RED , payload: response})
// }

// function* deleteSaga(action) {
//    let response = yield deleteRecord("catEgory", action)
//    yield put({ type: DELETE_CATEGORY_RED, payload: action.payload })
// }

// export default function* catEgorySaga() {         
//    yield takeEvery(CREATE_CATEGORY, createSaga)
//    yield takeEvery(GET_CATEGORY, getSaga)
//    yield takeEvery(UPDATE_CATEGORY, updateSaga)
//    yield takeEvery(DELETE_CATEGORY, deleteSaga)
// }

import { put, takeEvery } from "redux-saga/effects"
import { CREATE_CATEGORY, CREATE_CATEGORY_RED, DELETE_CATEGORY, DELETE_CATEGORY_RED, GET_CATEGORY, GET_CATEGORY_RED, UPDATE_CATEGORY, UPDATE_CATEGORY_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from  "./Service/index"

function* createSaga(action) {                                          //Worker
    let response = yield createRecord("category", action)
    // let response = yield createMultipartRecord("catEgory", action)
    yield put({ type: CREATE_CATEGORY_RED, payload: response })
}

function* getSaga(action) {                                             //Worker
    let response = yield getRecord("category")
    yield put({ type: GET_CATEGORY_RED, payload: response })
}

function* updateSaga(action) {                                          //Worker
    yield updateRecord("category", action)
    yield put({ type: UPDATE_CATEGORY_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("catEgory", action)
    // yield put({ type: UPDATE_CATEGORY_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("category", action)
    yield put({ type: DELETE_CATEGORY_RED, payload: action.payload })
}

export default function* CategorySaga(){
    yield takeEvery(CREATE_CATEGORY,createSaga)                 //Watcher
    yield takeEvery(GET_CATEGORY,getSaga)                       //Watcher
    yield takeEvery(UPDATE_CATEGORY,updateSaga)                 //Watcher
    yield takeEvery(DELETE_CATEGORY,deleteSaga)                 //Watcher
}