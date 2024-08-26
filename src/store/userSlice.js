import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user : null
  }
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserDetals : (state,action)=>{
        state.user = action.payload
        console.log("userDetails",action.payload)
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setUserDetals } = userSlice.actions
  
  export default userSlice.reducer