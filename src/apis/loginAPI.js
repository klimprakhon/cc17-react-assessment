import axios from "./axios.config";

export const getUserById = async (userData) => {
    return await axios.get(`/auth/login`, userData);
  };