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

import Settings from "../pages/Settings";
import CreateJob from "../pages/CreateJob";
import JobsPage from "../pages/JobsPage";
import JobApplication from "../pages/JobApplication";
import EmployerDashboard from "../pages/Employer/EmployerDashboard";

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
          <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/employer/createjob" element={<CreateJob />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/apply/:jobId" element={<JobApplication />} />{" "}
          {/* Correct Route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
