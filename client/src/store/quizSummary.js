import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = { 
  quizType: "qqq",
timeLimit: 0,
title: "",
description: "",
visibility: "",
imgSrc: ""};
const quizDetailSlice = createSlice({
  name: "QuizDetail",
  initialState: initialCounterState,
  reducers: {
    updateQuizType(state,action) {
      state.quizType =action.payload;
    },
    updateTimeLimit(state, action) {
      state.timeLimit = action.payload;
    },
    updateTitle(state, action) {
      state.title = action.payload;
    },
    updateDescription(state, action) {
      state.description = action.payload;
    },
    updateVisibility(state, action) {
      state.visibility = action.payload;
    },
    updateImgSrc(state, action) {
      state.imgSrc = action.payload;
    } 
  },
});

export const {updateQuizType,updateTimeLimit,updateTitle,updateDescription,updateVisibility,updateImgSrc } = quizDetailSlice.actions
export default quizDetailSlice.reducer;



