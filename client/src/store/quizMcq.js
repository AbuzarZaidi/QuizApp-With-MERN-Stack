import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = { 
    quizQna:[  { question:"",
        correctOpt:"",
        options: [{ option1: "", option2: "", option3: "", option4: "" }]}]
 
};
const quizMcqSlice = createSlice({
    name: "QuizMcq",
    initialState: initialCounterState,
    reducers: {
        addNewQuestion(state) {
          state.quizQna.push(
            {
              question:"",
              correctOpt:"",
              options:[{ option1: "", option2: "", option3: "", option4: "" }]
            }
            
          )
          // console.log(state.quizQna)
        },
      quesHandler(state,action){
       state.quizQna[action.payload.i].question=action.payload.text;
  // newQuestion[i].question = text;
  // setQuizes(newQuestion);
  // console.log(state.quizQna)
  // console.log("in store")
  // console.log(action.payload.text)
  // console.log(action.payload.i)
  
      }
      }
})

export const { addNewQuestion, quesHandler} =  quizMcqSlice.actions
export default  quizMcqSlice.reducer;