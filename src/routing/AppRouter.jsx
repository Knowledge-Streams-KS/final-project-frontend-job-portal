import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

// Import employer pages
import EmployerDashboard from "../pages/Employer/EmployerDashboard";
import EmployerRegister from "../pages/Employer/EmployerRegister";
import EmployerSignIn from "../pages/Employer/EmployerSignIn";

// Import jobseeker pages
import JobSeekerDashboard from "../pages/JobSeeker/JobSeekerDashboard";
import JobSeekerRegister from "../pages/JobSeeker/JobSeekerRegister";
import JobSeekerSignIn from "../pages/JobSeeker/JobSeekerSignIn";

// Import footer component
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Employer routes */}
          <Route path="/employer/signin" element={<EmployerSignIn />} />
          <Route path="/employer/register" element={<EmployerRegister />} />
          <Route
            path="/employerdashboard"
            element={
              <ProtectedRoute>
                <EmployerDashboard />
              </ProtectedRoute>
            }
          />

          {/* Jobseeker routes */}
          <Route path="/jobseeker/signin" element={<JobSeekerSignIn />} />
          <Route path="/jobseeker/register" element={<JobSeekerRegister />} />
          <Route
            path="/jobseekerdashboard"
            element={
              <ProtectedRoute>
                <JobSeekerDashboard />
              </ProtectedRoute>
            }
          />

          {/* Other routes */}
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
