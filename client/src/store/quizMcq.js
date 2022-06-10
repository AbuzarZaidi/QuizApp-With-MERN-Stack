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
        options: [{ option1: "", option2: "", option3: "", option4: "" }],
      });
      // console.log(state.quizQna)
    },
    quesHandler(state, action) {
      state.quizQna[action.payload.i].question = action.payload.text;
    },
    optionHandler(state,action){
      state.quizQna[action.payload.i].options[action.payload.j].option = action.payload.value;
      // console.log(action.payload.i)
      // console.log(action.payload.j)
      // console.log(action.payload.value);
    }
  },
});

export const { addNewQuestion, quesHandler,optionHandler } = quizMcqSlice.actions;
export default quizMcqSlice.reducer;
