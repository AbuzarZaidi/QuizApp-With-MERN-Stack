import axios from "axios";
const url = process.env.REACT_APP_BACKEND_URL+"/users";
export const signup = (user) => axios.post(`${url}/signup`,user);
export const login = (user) => axios.post(`${url}/login`,user);