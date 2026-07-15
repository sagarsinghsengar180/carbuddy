import { all } from "redux-saga/effects";
import CategorySaga from "./CategorySaga";
import BrandSaga from "./BrandSaga";
import CarSaga from "./CarSaga";
import FaqSaga from "./FaqSaga";
import FeatureSaga from "./FeatureSaga";
import ServiceSaga from "./serviceSaga";
import SettingSaga from "./SettingSaga";
export default function* RootSaga(){
    yield all ([
        CategorySaga(),
        BrandSaga(),
        CarSaga(),
        FaqSaga(),
        FeatureSaga(),
        ServiceSaga(),
        SettingSaga(),
    ])
}
