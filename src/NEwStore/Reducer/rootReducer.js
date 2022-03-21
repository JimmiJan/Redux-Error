import { combineReducers } from "redux";
import { getProfileReducer } from "./getProfileReducer";

const rootreducer = combineReducers({
    getprofileREducer:getProfileReducer
})
export default rootreducer