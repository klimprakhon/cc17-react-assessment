import { createContext, useState } from "react";
import * as todoAPI from "../apis/todoAPI";

export const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  // POST -- create Todo
  const createTodo = async (data) => {
    try {
      const response = await todoAPI.createTodo(data);
      console.log(response.data);
      setTodoList([...todoList, response.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // GET -- Get all Todos
  const getAllTodos = async () => {
    try {
      const response = await todoAPI.getAllTodos();
      setTodoList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // PATCH -- update Todo
  const updateTodo = async (todoId, updateData) => {
    try {
      const response = await todoAPI.updateTodo(todoId, updateData);
      console.log(response.data.data)
      setTodoList((prev) =>
        prev.reduce((acc, todo) => {
          if (todo?.id === todoId) {
            acc.push(response.data.data);
            return acc;
          } else {
            acc.push(todo);
            return acc;
          }
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE - delete Todo
  const deleteTodo = async (todoId) => {
    try {
      await todoAPI.deleteTodo(todoId);
      setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todoList);

  return (
    <TodoContext.Provider
      value={{ createTodo, getAllTodos, updateTodo, deleteTodo, todoList }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
