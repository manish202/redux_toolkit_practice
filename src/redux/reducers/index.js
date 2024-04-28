import updownReducer from "./updown";
import multDivReducer from "./multDiv";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    updownReducer,
    multDivReducer
});
export default rootReducer;