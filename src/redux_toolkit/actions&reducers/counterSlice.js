import {createSlice} from "@reduxjs/toolkit";
import {incByNum} from "./actions";
const initialState = {
    count:0
}
const counterSlice = createSlice({
    name:"my_counter",
    initialState,
    reducers:{
        increment: (state,action) => {
            state.count++;
        },
        decrement: (state,action) => {
            state.count--;
        }
    },
    extraReducers(builder){
        builder.addCase(incByNum,(state,action) => {
            console.log("count");
            state.count += action.payload;
        });
    }
});
export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;