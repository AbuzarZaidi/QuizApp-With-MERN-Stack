import { configureStore } from '@reduxjs/toolkit';

import quizSummaryReducer from './quizSummary';
import quizMcq from './quizMcq'
import startQuiz from './startQuiz';
const store = configureStore({
  reducer: { detail: quizSummaryReducer,mcq:quizMcq,set: startQuiz },
});

export default store;