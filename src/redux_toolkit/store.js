import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./actions&reducers/counterSlice";
import counterReducer2 from "./actions&reducers/counterSlice2";
import counterReducer3 from "./actions&reducers/counterReducer3";
const store = configureStore({
    reducer:{
        counterReducer,
        counterReducer2,
        counterReducer3
    }
});
export default store;