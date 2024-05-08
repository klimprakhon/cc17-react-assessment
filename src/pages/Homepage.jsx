import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { TodoContext } from "../contexts/TodoContext";
import TodoList from "../components/TodoList";

function Homepage() {
  const navigate = useNavigate();

  // Initialize state for Create new task situation
  const [newTodo, setNewTodo] = useState("");

  // Use logout functionality from AuthContext
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout;
    navigate("/login");
  };

  // Use CRUD todo functionality from TodoContext
  const { createTodo, getAllTodos, todoList } = useContext(TodoContext);

  // getAllTodos -- to show all todo list
  // Re-fetch when user create new task

  useEffect(() => {
    getAllTodos();
  }, [newTodo]);

  // Create todo functionality
  // useState and handler for create todo

  const handleChangeNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleCreateNewTodo = (event) => {
    event.preventDefault();
    createTodo({
      title: `${newTodo}`,
    });
    setNewTodo("");
  };

  // UI

  return (
    <div className=" flex h-screen w-screen justify-center items-center">
      <div className="container w-1/2 flex-col items-center  space-y-4 px-10 py-12 bg-slate-300 rounded-xl">
        <h1 className="text-5xl font-extrabold ">My Todo</h1>
        <div className="p-2">
          <label className="label flex items-center">
            <span className="label-text text-base font-bold">New task</span>
            <button
              className="btn btn-sm btn-outline"
              onClick={handleCreateNewTodo}
            >
              Create
            </button>
          </label>
          <input
            type="text"
            value={newTodo}
            className="input bg-inherit w-full rounded-none border-b-black placeholder-white"
            placeholder="Enter new task"
            onChange={handleChangeNewTodo}
          />
        </div>
        {todoList.map((item) => (
          <TodoList key={item.id} todo={item.title} todoId={item.id} />
        ))}
        <button
          type="button"
          onClick={handleLogout}
          className="btn btn-block flex text-2xl font-bold"
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default Homepage;
