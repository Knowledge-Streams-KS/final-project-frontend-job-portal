import React from "react";
import AppRouter from "./routing/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer"; // Ensure Footer is imported
import "./styles/tailwind.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="app-container">
        <div className="main-content">
          <AppRouter />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
