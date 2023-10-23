import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const PF = process.env.REACT_APP_SERVER_END;

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const login = async (inputs) => {
    const res = await axios.post(PF + "auth/login", inputs, {
      withCredentials: true, // To save cookies - Also change in the CORS section
    });
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post(PF + "auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
