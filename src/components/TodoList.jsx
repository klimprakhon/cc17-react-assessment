import { useState, useContext, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoList({ todoId, todo }) {
  // Use Delete functionality from TodoContext
  const { getAllTodos, deleteTodo } = useContext(TodoContext);

  // useState and handler for delete task
  const [isDelete, setIsDelete] = useState(false);

  const handleDelete = () => {
    setIsDelete(!isDelete);
    deleteTodo(todoId);
  };

  // Re-fetch when use delete the task -- *** NEED TO BE REFACTORED IN FUTURE *** --
  useEffect(() => {
    getAllTodos();
  }, [isDelete]);

  // UI
  return (
    <div className=" flex justify-between p-2">
      <div className="flex gap-3">
        <input type="checkbox" className="checkbox" />
        <p>{todo}</p>
      </div>
      <button
        className="text-gray-400 rounded-lg hover:bg-gray-200 hover:text-gray-900"
        onClick={handleDelete}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default TodoList;
