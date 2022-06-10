import { configureStore } from '@reduxjs/toolkit';

import quizSummaryReducer from './quizSummary';
import quizMcq from './quizMcq'

const store = configureStore({
  reducer: { detail: quizSummaryReducer,mcq:quizMcq  },
});

export default store;