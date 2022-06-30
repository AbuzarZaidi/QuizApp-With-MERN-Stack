import * as api from "../api/readQuiz";
export const readQuiz = async () => {
    try {
      const { data } = await api.readQuiz();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const readUserQuizes = async (userId) => {
    try {
      const { data } = await api.readUserQuizes(userId);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  export const deleteQuiz=async(id)=>{
    
    try {
      console.log("3rd")
      console.log(id)  
        await api.deleteQuiz(id);
       
    } catch (error) {
        console.log(error);
        
    }
}