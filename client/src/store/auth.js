import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = {  token:"",id:"",isLogin:false};
const authSlice = createSlice({
    name: "auth",
    initialState: initialCounterState,
    reducers: {
        setTokenHandler(state, action) {
            state.token=action.payload;
            state.isLogin=!!action.payload
          },
          setIdHandler(state, action) {
            state.id=action.payload;
          },

    }
})
export const {
    setTokenHandler, setIdHandler
  } = authSlice.actions;
export default authSlice.reducer;