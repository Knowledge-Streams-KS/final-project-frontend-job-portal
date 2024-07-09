import React from "react";
import AppRouter from "./routing/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import "./styles/tailwind.css";

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
