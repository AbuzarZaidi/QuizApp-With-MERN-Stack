import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = {  token:"",id:"",isLogin:false,active:0,userName:"",signupOpen:false};
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
          setNameHandler(state, action) {
            state.userName=action.payload;
          },
setlogoutHandler(state){
  state.token="";
  state.id="";
  state.isLogin=false;
},
setActiveHandler(state){
state.active=Math.floor(Math.random() * 10);
},
setLocationHandler(state,action){
  state.active=action.payload;
},
setSignupHandler(state,action){
  state.signupOpen=action.payload;
}
    }
})
export const {
    setTokenHandler, setIdHandler,setlogoutHandler,setActiveHandler,setNameHandler,setLocationHandler,setSignupHandler
  } = authSlice.actions;
export default authSlice.reducer;