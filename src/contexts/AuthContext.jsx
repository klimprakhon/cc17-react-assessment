import { createContext, useState } from "react";
import * as loginAPI from "../apis/loginAPI";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  // Login => userDate = {user: {id, email, number, name}
  // Logout => userData = {}
  const login = async () => {
    // Note: api("/login")
    try {
      const res = await loginAPI.getUserByData({
        email: "user2024@mail.com",
        password: "qwerty",
      });
      setUserData(res.data);
    } catch (error) {
      console.log(error);
      setUserData({});
    }
  };

  const logout = async () => {
    setUserData({});
  };

  return (
    <AuthContext.Provider value={(userData, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
