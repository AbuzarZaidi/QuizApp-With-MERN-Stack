import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = {
  quizQna: [
    {
      question: "",
      correctOpt: "",
      options: [{ option: "",color:"#E22D3B"}, {option: "",color:"#3668CE"},{ option:"", color:"#D89E14"}, {option: "",color:"#40890F"}],
    },
  ],
};
const quizMcqSlice = createSlice({
  name: "QuizMcq",
  initialState: initialCounterState,
  reducers: {
    addNewQuestion(state) {
      state.quizQna.push({
        question: "",
        correctOpt: "",
        options: [{ option: "",color:"#E22D3B"}, {option: "",color:"#3668CE"},{ option:"", color:"#D89E14"}, {option: "",color:"#40890F"}],
      });
      // console.log(state.quizQna)
    },
    quesHandler(state, action) {
      state.quizQna[action.payload.i].question = action.payload.text;
    },
    optionHandler(state,action){
      state.quizQna[action.payload.i].options[action.payload.j].option = action.payload.value;
    },
    correctOptionHandler(state,action){
       state.quizQna[action.payload.i].correctOpt = action.payload.j;
    }
  },
});

export const { addNewQuestion, quesHandler,optionHandler,correctOptionHandler } = quizMcqSlice.actions;
export default quizMcqSlice.reducer;
