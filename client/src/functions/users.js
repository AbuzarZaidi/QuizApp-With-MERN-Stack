import * as api from "../api/users";
export const signup = async (user) => {
  try {
    const { data } = await api.signup(user);

    return data;
  } catch (error) {
    return error;
  }
};

export const login = async (user) => {
  try {
    const { data } = await api.login(user);
    return data;
  } catch (error) {
    return error;
  }
};
