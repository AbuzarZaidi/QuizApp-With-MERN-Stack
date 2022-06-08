import axios from "axios";
const url = "http://localhost:5000/creator";
// export const readExpense = () => axios.get(url);
export const createNewQuiz = (newQuiz) => axios.post(url, newQuiz);
// export const deleteExpense = (id) => axios.delete(`${url}/${id}`);
// export const updateExpense = (id) => axios.patch(`${url}/${id}`);