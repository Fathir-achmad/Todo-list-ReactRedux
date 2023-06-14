import { createSlice } from "@reduxjs/toolkit";

//--- Kalau mau bikin semisal userSLice harus bikin page

const state = { //---initialState = nama variable
    value: 0
}


const counterSlice = createSlice({
    name: 'Counter',
    initialState : state,
    reducers : { //--- Package dari createSlice
        increment : (state) => {
            state.value += 1
        },

        decrement : (state) => {
            state.value -= 1
        },
        incrementBy : (state, actions) => {
            state.value += actions.payload
        },
        decrementBy : (state, actions) => {
            state.value -= actions.payload //payload adalah syntaks untuk ngambil dari parameternya
        },
    }
})

export const { increment, decrement, incrementBy, decrementBy} = counterSlice.actions;
export default counterSlice.reducer
