import axios from "axios";
const url = "http://localhost:5000/users";
export const signup = (user) => axios.post(`${url}/signup`,user);
export const login = (user) => axios.post(`${url}/login`,user);