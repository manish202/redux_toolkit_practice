import { createAction, createReducer } from '@reduxjs/toolkit';
const increment = createAction('increment');
const decrement = createAction('decrement');
const incrementByAmount = createAction('incrementByAmount');
const initialState = { count3: 0 }
const counterReducer3 = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.count3++;
      })
      .addCase(decrement, (state, action) => {
        state.count3--;
      })
      .addCase(incrementByAmount, (state, action) => {
        state.count3 += action.payload;
      })
});
export {increment,decrement,incrementByAmount};
export default counterReducer3;