import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = {  token:"",id:"",isLogin:false,active:0};
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
setlogoutHandler(state){
  state.token="";
  state.id="";
  state.isLogin=false;
},
setActiveHandler(state){
state.active=Math.floor(Math.random() * 10);
}
    }
})
export const {
    setTokenHandler, setIdHandler,setlogoutHandler,setActiveHandler
  } = authSlice.actions;
export default authSlice.reducer;