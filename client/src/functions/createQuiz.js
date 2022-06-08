import * as api from "../api";
export const createNewQuiz = async (newQuiz) => {
    try {
      const { data } = await api.createNewQuiz(newQuiz);
      return data;
    } catch (error) {
      console.log(error);
    }
  };