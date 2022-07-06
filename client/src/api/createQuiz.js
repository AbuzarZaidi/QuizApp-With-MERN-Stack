import axios from "axios";

const url = "http://localhost:5000/creator";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// export const readExpense = () => axios.get(url);
 export const createNewQuiz = (newQuiz,header) => axios.post(url, newQuiz,header);
// export const deleteExpense = (id) => axios.delete(`${url}/${id}`);
 export const updateQuiz = (id,data,header) => axios.patch(`${url}/${id}`,data,header);