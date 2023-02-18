// import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };


const counterslice=createSlice({
   name:'counter',
   initialState,
   reducers:{
    increase(state,action){
        state.counter= state.counter+action.payload;
    },
    decrease(state,action){
        state.counter= state.counter-action.payload;
    },
    toggle(state){
        state.showCounter=!state.showCounter;
    }
   }
});




// const CountReducer = (state = initialstate, action) => {
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrease") {
//     return {
//       counter: state.counter - action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if(action.type === "toggle"){
//     return {
//         counter: state.counter,
//         showCounter: !state.showCounter 
//     }
//   }


//   return state;
// };

const store = configureStore({
    reducer:counterslice.reducer
});


export const counteractions=counterslice.actions;

export default store;
