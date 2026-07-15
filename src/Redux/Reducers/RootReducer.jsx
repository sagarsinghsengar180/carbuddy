import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import CarReducer from "./CarReducer";
import FaqReducer from "./FaqReducer";
import FeatureReducer from "./FeatureReducer";
import ServiceReducer from "./ServiceReducer";
import SettingReducer from "./SettingReducer";
 export default combineReducers({
    CategoryStateData: CategoryReducer,
    BrandStateData: BrandReducer,
    CarStateData: CarReducer,
    FaqStateData: FaqReducer,
    FeatureStateData: FeatureReducer,
    ServiceStateData: ServiceReducer,
    SettingStateData: SettingReducer,
 })

 