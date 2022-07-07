import * as api from "../api/createQuiz";
export const createNewQuiz = async (newQuiz,header) => {
 
    try {
      const { data } = await api.createNewQuiz(newQuiz,header);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  export const updateQuiz=async(id,data,header)=>{
    try {
    
        const result=await api.updateQuiz(id,data,header);
        return result;
    } catch (error) {
        console.log(error);
        
    }
}
export const newPlayer=async(id,data)=>{
  try {
      const result=await api.playerAttempt(id,data);
      return result;
  } catch (error) {
      console.log(error);
      
  }
}