// src/layouts/MainLayout.jsx
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }) => (
  <div>
    <ToastContainer />
    {children}
  </div>
);

export default MainLayout;
