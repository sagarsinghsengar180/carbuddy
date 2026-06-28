import { configureStore } from "@reduxjs/toolkit";
import CreateSagaMiddleware from "redux-saga"
import RootReducer from "./Reducers/RootReducer";
import RootSaga from "./Saga/Rootsaga";

const Saga = CreateSagaMiddleware()
const Store= configureStore({
    reducer: RootReducer,
    middleware: ()=>[Saga]
})
export default Store
Saga.run(RootSaga)

