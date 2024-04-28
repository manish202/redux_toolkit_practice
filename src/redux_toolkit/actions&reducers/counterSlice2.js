import {createSlice} from "@reduxjs/toolkit";
import {incByNum} from "./actions";
const initialState = {
    count2:0
}
const counterSlice2 = createSlice({
    name:"my_counter2",
    initialState,
    reducers:{
        increment: (state,action) => {
            state.count2++;
        },
        decrement2: (state,action) => {
            state.count2--;
        }
    },
    extraReducers(builder){
        builder.addCase(incByNum,(state,action) => {
            console.log("count2");
            state.count2 += action.payload;
        });
    }
});
export const {increment,decrement2} = counterSlice2.actions;
export default counterSlice2.reducer;