import axios from "axios";
const url = process.env.REACT_APP_BACKEND_URL+"/creator";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
 export const createNewQuiz = (newQuiz,header) => axios.post(url, newQuiz,header);
 export const updateQuiz = (id,data,header) => axios.patch(`${url}/${id}`,data,header);
 export const playerAttempt = (uid,data) => axios.patch(`${url}/${uid}`,data);