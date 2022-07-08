import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { quiz: {} };
const startQuizSlice = createSlice({
  name: "StartQuiz",
  initialState: initialCounterState,
  reducers: {
    setnHandler(state, action) {
      state.quiz = action.payload;
    },
  },
});
export const { setnHandler } = startQuizSlice.actions;
export default startQuizSlice.reducer;
