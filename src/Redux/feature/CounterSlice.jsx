import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
  }

  export const counterSlice =createSlice({
    name:'counter',
    initialState,
    reducers:{
 increment:(state,action)=>{
 state.count = state.count +1
 
},

 decrement:(state,action)=>{
  state.count = state.count -1
  },

 incrementByValue :(state,action)=>{
  state.count = state.count +action.payload.value
  }
    }
  })
   
  export const{ decrement, increment,incrementByValue}=counterSlice.actions

  export default counterSlice.reducer