import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import quizSummaryReducer from './quizSummary';
import quizMcq from './quizMcq'
import truefalse from './truefalse'
import startQuiz from './startQuiz';
const store = configureStore({
  reducer: { detail: quizSummaryReducer,mcq:quizMcq,set: startQuiz,trueFalse:truefalse, authData:auth},
});

export default store;