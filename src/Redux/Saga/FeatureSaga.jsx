// import { put, takeEvery } from "redux-saga/effects"
// import { createMultipleRecord, createRecord, deleteRecord, getRecord, updateMuhltipleRecord, updateRecord } from "../Service/Index"
// import { CREATE_FEATURE, CREATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED } from "../../Constants"



// function* createSaga(action) {
//    let response = yield createRecord("feature", action)
//    // let response = yield createMultipleRecord ("feature" , action)
//    yield put({ type: CREATE_FEATURE_RED, payload: response })
// }
// function* getSaga(action) {
//    let response = yield getRecord("feature")
//    yield put({ type: GET_FEATURE_RED, payload: response })
// }
// function* updateSaga(action) {
//    yield updateRecord("feature", action)
//    yield put({ type: UPDATE_FEATURE_RED, payload: action.payload })
//    //  let response = yield updateMuhltipleRecord ("feature", action)
//    // yield put({ type: UPDATE_FEATURE_RED , payload: response})
// }

// function* deleteSaga(action) {
//    let response = yield deleteRecord("feature", action)
//    yield put({ type: DELETE_FEATURE_RED, payload: action.payload })
// }

// export default function* FEATURESaga() {         
//    yield takeEvery(CREATE_FEATURE, createSaga)
//    yield takeEvery(GET_FEATURE, getSaga)
//    yield takeEvery(UPDATE_FEATURE, updateSaga)
//    yield takeEvery(DELETE_FEATURE, deleteSaga)
// }

import { put, takeEvery } from "redux-saga/effects"
import { CREATE_FEATURE, CREATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from  "./Service/index"

function* createSaga(action) {                                          //Worker
    let response = yield createRecord("feature", action)
    // let response = yield createMultipartRecord("feature", action)
    yield put({ type: CREATE_FEATURE_RED, payload: response })
}

function* getSaga(action) {                                             //Worker
    let response = yield getRecord("feature")
    yield put({ type: GET_FEATURE_RED, payload: response })
}

function* updateSaga(action) {                                          //Worker
    yield updateRecord("feature", action)
    yield put({ type: UPDATE_FEATURE_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("feature", action)
    // yield put({ type: UPDATE_FEATURE_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("feature", action)
    yield put({ type: DELETE_FEATURE_RED, payload: action.payload })
}

export default function* FeatureSaga(){
    yield takeEvery(CREATE_FEATURE,createSaga)                 //Watcher
    yield takeEvery(GET_FEATURE,getSaga)                       //Watcher
    yield takeEvery(UPDATE_FEATURE,updateSaga)                 //Watcher
    yield takeEvery(DELETE_FEATURE,deleteSaga)                 //Watcher
}