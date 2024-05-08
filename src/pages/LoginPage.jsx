import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center ">
      <div className="container w-2/3 flex-col items-center  space-y-10 p-8 bg-slate-300 rounded-xl">
        <h1 className="text-4xl font-extrabold ">Welcome</h1>
        <form onSubmit={handleLogin} className="flex-col">
          <label className="label flex items-center">
            <span className="label-text text-base font-bold">
              Email or Mobile
            </span>
          </label>
          <input
            type="text"
            className="input w-full"
            placeholder="Email or Mobile"
          />
          <label className="label items-center">
            <span className="label-text text-base font-bold">Password</span>
          </label>
          <input
            type="password"
            className="input w-full mb-10"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-block flex">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
