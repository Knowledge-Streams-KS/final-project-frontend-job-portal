import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import EmployerSignIn from "../pages/Employer/EmployerSignIn";
import EmployerRegister from "../pages/Employer/EmployerRegister";
import JobSeekerSignIn from "../pages/JobSeeker/JobSeekerSignIn";
import JobSeekerRegister from "../pages/JobSeeker/JobSeekerRegister";
import Home from "../pages/HomePage";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobSeekerDashboard from "../pages/JobSeeker/JobSeekerDashboard";
import "../App.css"; // Make sure to import the CSS file

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer/signin" element={<EmployerSignIn />} />
          <Route path="/employer/register" element={<EmployerRegister />} />
          <Route path="/jobseeker/signin" element={<JobSeekerSignIn />} />
          <Route path="/jobseeker/register" element={<JobSeekerRegister />} />
          <Route
            path="/jobseeker/jobseekerdashboard"
            element={<JobSeekerDashboard />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
