import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = {
  quizQna: [
    {
      question: "",
      correctOpt: "",
      options: [
        { option: "True", color: "#3668CE" },
        { option: "False", color: "#E22D3B" },
      ],
    },
  ],
};
const quizTruefalseSlice = createSlice({
  name: "QuizTrueFalse",
  initialState: initialCounterState,
  reducers: {
    tfAddNewQuestion(state) {
      state.quizQna.push({
        question: "",
        correctOpt: "",
        options: [
          { option: "True", color: "#3668CE" },
          { option: "False", color: "#E22D3B" },
        ],
      });
    },
    tfQuesHandler(state, action) {
      state.quizQna[action.payload.i].question = action.payload.text;
    },
    updatetfHandler(state, action) {
      state.quizQna = action.payload;
    },
    tfOptionHandler(state, action) {
      state.quizQna[action.payload.i].options[action.payload.j].option =
        action.payload.value;
    },
    tfCorrectOptionHandler(state, action) {
      state.quizQna[action.payload.i].correctOpt = action.payload.j;
    },
    tfResetHandler(state) {
      state.quizQna = [
        {
          question: "",
          correctOpt: "",
          options: [
            { option: "True", color: "#3668CE" },
            { option: "False", color: "#E22D3B" },
          ],
        },
      ];
    },
  },
});

export const {
  tfAddNewQuestion,
  tfQuesHandler,
  tfOptionHandler,
  tfCorrectOptionHandler,
  tfResetHandler,
  updatetfHandler,
} = quizTruefalseSlice.actions;
export default quizTruefalseSlice.reducer;
