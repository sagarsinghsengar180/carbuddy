// import { put, takeEvery } from "redux-saga/effects"
// import { createMultipleRecord, createRecord, deleteRecord, getRecord, updateMuhltipleRecord, updateRecord } from "../Service/Index"
// import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../../Constants"



// function* createSaga(action) {
//    let response = yield createRecord("brand", action)
//    // let response = yield createMultipleRecord ("brand" , action)
//    yield put({ type: CREATE_BRAND_RED, payload: response })
// }
// function* getSaga(action) {
//    let response = yield getRecord("brand")
//    yield put({ type: GET_BRAND_RED, payload: response })
// }
// function* updateSaga(action) {
//    yield updateRecord("brand", action)
//    yield put({ type: UPDATE_BRAND_RED, payload: action.payload })
//    //  let response = yield updateMuhltipleRecord ("brand", action)
//    // yield put({ type: UPDATE_BRAND_RED , payload: response})
// }

// function* deleteSaga(action) {
//    let response = yield deleteRecord("brand", action)
//    yield put({ type: DELETE_BRAND_RED, payload: action.payload })
// }

// export default function* BRANDSaga() {         
//    yield takeEvery(CREATE_BRAND, createSaga)
//    yield takeEvery(GET_BRAND, getSaga)
//    yield takeEvery(UPDATE_BRAND, updateSaga)
//    yield takeEvery(DELETE_BRAND, deleteSaga)
// }

import { put, takeEvery } from "redux-saga/effects"
import { CREATE_BRAND, CREATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from  "./Service/index"

function* createSaga(action) {                                          //Worker
    let response = yield createRecord("brand", action)
    // let response = yield createMultipartRecord("brand", action)
    yield put({ type: CREATE_BRAND_RED, payload: response })
}

function* getSaga(action) {                                             //Worker
    let response = yield getRecord("brand")
    yield put({ type: GET_BRAND_RED, payload: response })
}

function* updateSaga(action) {                                          //Worker
    yield updateRecord("brand", action)
    yield put({ type: UPDATE_BRAND_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("brand", action)
    // yield put({ type: UPDATE_BRAND_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("brand", action)
    yield put({ type: DELETE_BRAND_RED, payload: action.payload })
}

export default function* BrandSaga(){
    yield takeEvery(CREATE_BRAND,createSaga)                 //Watcher
    yield takeEvery(GET_BRAND,getSaga)                       //Watcher
    yield takeEvery(UPDATE_BRAND,updateSaga)                 //Watcher
    yield takeEvery(DELETE_BRAND,deleteSaga)                 //Watcher
}