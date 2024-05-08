import axios from "./axios.config";

export const getUserByData = async (userData) => {
  return await axios.get(`/auth/login`, userData);
};
