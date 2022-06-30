import * as api from "../api/createQuiz";
export const createNewQuiz = async (newQuiz,header) => {
 
    try {
      const { data } = await api.createNewQuiz(newQuiz,header);
      return data;
    } catch (error) {
      console.log(error);
    }
  };