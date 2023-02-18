// import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialcounterState = { counter: 0, showCounter: true };


const counterslice=createSlice({
   name:'counter',
   initialState:initialcounterState,
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

const initialauthState={
    isAuthenticated:false
}



const authslice=createSlice({
    name:'authentication',
    initialState:initialauthState,
    reducers:{
    login(state){
        state.isAuthenticated=true;   
    },
    logout(state){
        state.isAuthenticated=false; 
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
    reducer:{counter:counterslice.reducer,auth:authslice.reducer}
});


export const counteractions=counterslice.actions;
export const authactions=authslice.actions;
export default store;
