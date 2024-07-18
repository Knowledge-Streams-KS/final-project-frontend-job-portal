import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (values, userType) => {
    try {
      const endpoint =
        userType === "employer"
          ? "http://localhost:3000/auth/employer/signin"
          : "http://localhost:3000/auth/jobseeker/signin";

      const response = await axios.post(endpoint, values);
      const { token, user: userData } = response.data;

      // Store user data with type in state and localStorage
      const userWithRole = { ...userData, type: userType };
      setUser(userWithRole);
      localStorage.setItem("user", JSON.stringify(userWithRole));

      return userWithRole;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
