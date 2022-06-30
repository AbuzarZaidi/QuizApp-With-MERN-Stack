import axios from "axios";
const url = "http://localhost:5000/read";
export const readQuiz = () => axios.get(url);
export const readUserQuizes = (userId) => axios.get(`${url}/${userId}`);
