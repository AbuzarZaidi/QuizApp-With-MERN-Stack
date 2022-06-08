import { configureStore } from '@reduxjs/toolkit';

import quizSummaryReducer from './quizSummary';


const store = configureStore({
  reducer: { detail: quizSummaryReducer },
});

export default store;