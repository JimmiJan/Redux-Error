import { combineReducers } from "redux";
import { loginReducer } from "./authReducer";

const rootReducer = combineReducers({
    loginReducer:loginReducer
})
export default rootReducer;