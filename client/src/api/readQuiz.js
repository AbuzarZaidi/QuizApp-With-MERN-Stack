import axios from "axios";
const url = process.env.REACT_APP_BACKEND_URL+"/read";
export const readQuiz = () => axios.get(url);
export const readUserQuizes = (userId) => axios.get(`${url}/${userId}`);
export const deleteQuiz=(userId,id)=>axios.delete(`${url}/${userId}~${id}`);
