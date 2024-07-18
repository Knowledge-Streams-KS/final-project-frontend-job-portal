import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const JobSeekerDashboard = () => {
  const [applications, setApplications] = useState([]);
  const userEmail = "daniyalmazhar1122@gmail.com"; // Replace with actual user email

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/jobApplications/jobseeker?email=${userEmail}`,
      );
      setApplications(response.data);
    } catch (error) {
      toast.error(
        `Error fetching applications: ${error.response?.data?.message || error.message}`,
      );
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleWithdraw = async (applicationId) => {
    try {
      await axios.delete(
        `http://localhost:3000/jobApplications/${applicationId}`,
      );
      toast.success("Application withdrawn successfully");
      fetchApplications(); // Refresh applications list
    } catch (error) {
      toast.error(
        `Error withdrawing application: ${error.response?.data?.message || error.message}`,
      );
    }
  };

  return (
    <div>
      <div className="p-8">
        <h1 className="mb-4 text-2xl">Manage Your Applications</h1>
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="rounded border p-4">
              <h2 className="text-xl font-bold">{app.Job.title}</h2>
              <p>
                <strong>Status:</strong> {app.status}
              </p>
              <button
                onClick={() => handleWithdraw(app.id)}
                className="rounded bg-red-500 p-2 text-white"
              >
                Withdraw
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobSeekerDashboard;
