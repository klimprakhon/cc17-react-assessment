import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function LoginPage() {
  const navigate = useNavigate();

  // Use login from AuthContext
  const { userData, login, logout } = useContext(AuthContext);

  // useState and Handler for receiving Email and Password data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  // Handler when user login
  const handleLogin = async (event) => {
    event.preventDefault();
    // User validation
    if (email === "user2024@mail.com" && password === "qwerty") {
      await login;
      // redirect to homepage
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center ">
      <div className="container w-2/3 flex-col items-center  space-y-10 p-8 bg-slate-300 rounded-xl">
        <h1 className="text-4xl font-extrabold ">Welcome</h1>
        <form onSubmit={handleLogin} className="flex-col">
          <label className="label flex items-center">
            <span className="label-text text-base font-bold">Email</span>
          </label>
          <input
            type="text"
            className="input w-full"
            placeholder="Email"
            onChange={handleChangeEmail}
          />
          <label className="label items-center">
            <span className="label-text text-base font-bold">Password</span>
          </label>
          <input
            type="password"
            className="input w-full mb-10"
            placeholder="Password"
            onChange={handleChangePassword}
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
