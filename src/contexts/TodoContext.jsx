import { createContext, useState } from "react";
import * as todoAPI from "../apis/todoAPI";

export const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState({});

  // POST -- create Todo
  const createTodo = async (data) => {
    try {
      const response = await todoAPI.createTodo(data);
      setTodoList([todoList, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // GET -- Get all Todos
  const getAllTodos = async () => {
    try {
      const response = await todoAPI.getAllTodos();
      setTodoList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // PATCH -- update Todo
  const updateTodo = async (todoId, updateData) => {
    try {
      const response = await todoAPI.updateTodo(todoId, updateData);
      setTodoList([...todoList, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE - delete Todo
  const deleteTodo = async (todoId) => {
    try {
      await todoAPI.deleteTodo(todoId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TodoContext.Provider
      value={{ createTodo, getAllTodos, updateTodo, deleteTodo, todoList }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
