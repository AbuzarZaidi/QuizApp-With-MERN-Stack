import * as api from "../api/readQuiz";
export const readQuiz = async () => {
    try {
      const { data } = await api.readQuiz();
      return data;
    } catch (error) {
      console.log(error);
    }
  };