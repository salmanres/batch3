import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementbyvalue : (state, action) => {
            state.value += action.payload
        }
    }
});

export const { increment, decrement, incrementbyvalue } = counterSlice.actions;
export default counterSlice.reducer;