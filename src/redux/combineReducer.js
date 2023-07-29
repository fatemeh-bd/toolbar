import {  combineReducers } from "redux";
import addToolReducer from "./addToolReducer";
let rootReducer=combineReducers({
    designerList:addToolReducer
})
export default rootReducer