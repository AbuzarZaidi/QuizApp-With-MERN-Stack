import { createSlice } from '@reduxjs/toolkit';
const initialCounterState = { 
  quizType: "quiz",
  quizId:"",
timeLimit: 30,
title: "",
description: "",
visibility: "public",
imgSrc: {},
category:"",
creator:""};
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
    updateQuizId(state, action) {
      state.quizId = action.payload;
    },
    updateTitle(state, action) {
      state.title = action.payload;
    },
    updateCreator(state, action) {
      state.creator = action.payload;
    },
    updateDescription(state, action) {
      state.description = action.payload;
    },
    updateVisibility(state, action) {
      state.visibility = action.payload;
    },
    updateCategory(state, action) {
      state.category = action.payload;
    },
    updateImgSrc(state, action) {
      state.imgSrc = action.payload;
    } ,
   resetDetailHandlers(state,action){
  state.timeLimit= 30;
  state.title= action.payload;
  state.description= action.payload;
  state.visibility= action.payload;
  state.imgSrc= action.payload;
  state.category=action.payload;
  state.creator=action.payload;
}
  },
});

export const {updateQuizType,updateTimeLimit,updateTitle,updateDescription,updateVisibility,updateImgSrc,updateCategory,resetDetailHandlers,updateCreator,updateQuizId } = quizDetailSlice.actions
export default quizDetailSlice.reducer;



