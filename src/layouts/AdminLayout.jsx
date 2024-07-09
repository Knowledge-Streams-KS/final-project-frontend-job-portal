import React from "react";
import Navbar from "../components/Navbar";

const AdminLayout = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <div className="flex-grow">{children}</div>
  </div>
);

export default AdminLayout;
