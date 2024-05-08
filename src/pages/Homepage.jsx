import TodoList from "../components/TodoList";

function Homepage() {
  return (
    <div className=" flex h-screen w-screen justify-center items-center">
      <div className="container w-1/2 flex-col items-center  space-y-4 p-8 bg-slate-300 rounded-xl">
        <h1 className="text-5xl font-extrabold ">My Todo</h1>
        <div className="p-2">
          <label className="label flex items-center">
            <span className="label-text text-base font-bold">New task</span>
          </label>
          <input
            type="text"
            className="input bg-inherit w-full rounded-none border-b-black placeholder-white"
            placeholder="Enter new task"
          />
        </div>
        <TodoList />
        <TodoList />
        <TodoList />
        <button type="button" className="btn btn-block flex text-2xl font-bold">
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default Homepage;
