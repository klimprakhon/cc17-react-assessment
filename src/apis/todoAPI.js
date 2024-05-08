import axios from "./axios.config";

// POST -- createTodo
export const createTodo = async (data) => {
  return await axios.post(`v1/todo?userId=27`, data);
};

// GET -- getAllTodos

export const getAllTodos = async () => {
  return await axios.get(`v1/todo?userId=27`);
};

// GET -- getTodo

export const getTodo = async (todoId) => {
  return await axios.get(`v1/todo/${todoId}?userId=27`);
};

// PATCH -- updateTodo
export const updateTodo = async (todoId, updateData) => {
  return await axios.patch(`v1/todo/${todoId}?userId=27`, updateData);
};

// DELETE -- deleteTodo
export const deleteTodo = async (todoId) => {
  return await axios.delete(`v1/todo/${todoId}?userId=27`);
};
