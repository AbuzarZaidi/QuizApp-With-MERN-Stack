import * as api from "../api/createQuiz";
export const createNewQuiz = async (newQuiz,header) => {
 
    try {
      const { data } = await api.createNewQuiz(newQuiz,header);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  export const updateQuiz=async(id,data)=>{
    try {
      console.log("function")
      console.log(id)
        const result=await api.updateQuiz(id,data);
        return result;
    } catch (error) {
        console.log(error);
        
    }
}