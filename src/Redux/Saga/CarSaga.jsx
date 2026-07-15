// import { put, takeEvery } from "redux-saga/effects"
// import { createMultipleRecord, createRecord, deleteRecord, getRecord, updateMuhltipleRecord, updateRecord } from "../Service/Index"
// import { CREATE_CAR, CREATE_CAR_RED, DELETE_CAR, DELETE_CAR_RED, GET_CAR, GET_CAR_RED, UPDATE_CAR, UPDATE_CAR_RED } from "../../Constants"



// function* createSaga(action) {
//    let response = yield createRecord("car", action)
//    // let response = yield createMultipleRecord ("car" , action)
//    yield put({ type: CREATE_CAR_RED, payload: response })
// }
// function* getSaga(action) {
//    let response = yield getRecord("car")
//    yield put({ type: GET_CAR_RED, payload: response })
// }
// function* updateSaga(action) {
//    yield updateRecord("car", action)
//    yield put({ type: UPDATE_CAR_RED, payload: action.payload })
//    //  let response = yield updateMuhltipleRecord ("car", action)
//    // yield put({ type: UPDATE_CAR_RED , payload: response})
// }

// function* deleteSaga(action) {
//    let response = yield deleteRecord("car", action)
//    yield put({ type: DELETE_CAR_RED, payload: action.payload })
// }

// export default function* carSaga() {         
//    yield takeEvery(CREATE_CAR, createSaga)
//    yield takeEvery(GET_CAR, getSaga)
//    yield takeEvery(UPDATE_CAR, updateSaga)
//    yield takeEvery(DELETE_CAR, deleteSaga)
// }

import { put, takeEvery } from "redux-saga/effects"
import { CREATE_CAR, CREATE_CAR_RED, DELETE_CAR, DELETE_CAR_RED, GET_CAR, GET_CAR_RED, UPDATE_CAR, UPDATE_CAR_RED } from "../Constants"
import { createRecord, deleteRecord, getRecord, updateRecord } from  "./Service/index"

function* createSaga(action) {                                          //Worker
    let response = yield createRecord("car", action)
    // let response = yield createMultipartRecord("car", action)
    yield put({ type: CREATE_CAR_RED, payload: response })
}

function* getSaga(action) {                                             //Worker
    let response = yield getRecord("car")
    yield put({ type: GET_CAR_RED, payload: response })
}

function* updateSaga(action) {                                          //Worker
    yield updateRecord("car", action)
    yield put({ type: UPDATE_CAR_RED, payload: action.payload })
    // let response = yield updateMultipartRecord("car", action)
    // yield put({ type: UPDATE_CAR_RED, payload: response })
}

function* deleteSaga(action) {                                         //Worker
    yield deleteRecord("car", action)
    yield put({ type: DELETE_CAR_RED, payload: action.payload })
}

export default function* CarSaga(){
    yield takeEvery(CREATE_CAR,createSaga)                 //Watcher
    yield takeEvery(GET_CAR,getSaga)                       //Watcher
    yield takeEvery(UPDATE_CAR,updateSaga)                 //Watcher
    yield takeEvery(DELETE_CAR,deleteSaga)                 //Watcher
}