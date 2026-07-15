// import { put, takeEvery } from "redux-saga/effects"
// import { createMultipleRecord, createRecord, deleteRecord, getRecord, updateMuhltipleRecord, updateRecord } from "../Service/Index"
// import { CREATE_SERVICE, CREATE_SERVICE_RED, DELETE_SERVICE, DELETE_SERVICE_RED, GET_SERVICE, GET_SERVICE_RED, UPDATE_SERVICE, UPDATE_SERVICE_RED } from "../../Constants"



// function* createSaga(action) {
//    let response = yield createRecord("service", action)
//    // let response = yield createMultipleRecord ("service" , action)
//    yield put({ type: CREATE_SERVICE_RED, payload: response })
// }
// function* getSaga(action) {
//    let response = yield getRecord("service")
//    yield put({ type: GET_SERVICE_RED, payload: response })
// }
// function* updateSaga(action) {
//    yield updateRecord("service", action)
//    yield put({ type: UPDATE_SERVICE_RED, payload: action.payload })
//    //  let response = yield updateMuhltipleRecord ("service", action)
//    // yield put({ type: UPDATE_SERVICE_RED , payload: response})
// }

// function* deleteSaga(action) {
//    let response = yield deleteRecord("service", action)
//    yield put({ type: DELETE_SERVICE_RED, payload: action.payload })
// }

// export default function* SERVICESaga() {         
//    yield takeEvery(CREATE_SERVICE, createSaga)
//    yield takeEvery(GET_SERVICE, getSaga)
//    yield takeEvery(UPDATE_SERVICE, updateSaga)
//    yield takeEvery(DELETE_SERVICE, deleteSaga)
// }

import { put, takeEvery } from "redux-saga/effects"
import { CREATE_SERVICE, CREATE_SERVICE_RED, DELETE_SERVICE, DELETE_SERVICE_RED, GET_SERVICE, GET_SERVICE_RED, UPDATE_SERVICE, UPDATE_SERVICE_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from  "./Service/index"

function* createSaga(action) {                                          //Worker
    let response = yield createRecord("service", action)
    // let response = yield createMultipartRecord("service", action)
    yield put({ type: CREATE_SERVICE_RED, payload: response })
}

function* getSaga(action) {                                             //Worker
    let response = yield getRecord("service")
    yield put({ type: GET_SERVICE_RED, payload: response })
}

function* updateSaga(action) {                                          //Worker
    yield updateRecord("service", action)
    yield put({ type: UPDATE_SERVICE_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("service", action)
    // yield put({ type: UPDATE_SERVICE_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("service", action)
    yield put({ type: DELETE_SERVICE_RED, payload: action.payload })
}

export default function* ServiceSaga(){
    yield takeEvery(CREATE_SERVICE,createSaga)                 //Watcher
    yield takeEvery(GET_SERVICE,getSaga)                       //Watcher
    yield takeEvery(UPDATE_SERVICE,updateSaga)                 //Watcher
    yield takeEvery(DELETE_SERVICE,deleteSaga)                 //Watcher
}