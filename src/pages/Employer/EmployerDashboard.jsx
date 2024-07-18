import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
const EmployerDashboard = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user) {
      fetchApplications(user.id);
    }
  }, [user]);

  const fetchApplications = async (employerId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/jobApplications/employer/applications?employerId=${employerId}`,
      );
      setApplications(response.data);
    } catch (error) {
      toast.error("Error fetching applications");
      console.error("Error fetching applications:", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:3000/jobApplications/${id}/status`, {
        status,
      });
      toast.success(`Application ${status} successfully`);
      setApplications((prev) =>
        prev.map((app) => (app.id === id ? { ...app, status } : app)),
      );
    } catch (error) {
      toast.error(
        `Error updating application status: ${error.response?.data?.message || error.message}`,
      );
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Employer Dashboard</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Job Applications</h3>
        {applications.length > 0 ? (
          <table className="mt-4 min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Job Title</th>
                <th className="py-2">Job Seeker</th>
                <th className="py-2">Email</th>
                <th className="py-2">Resume</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td className="py-2">{app.Job.title}</td>
                  <td className="py-2">
                    {app.Jobseeker.firstName} {app.Jobseeker.lastName}
                  </td>
                  <td className="py-2">{app.Jobseeker.email}</td>
                  <td className="py-2">
                    <a
                      href={`http://localhost:3000/${app.resume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                  </td>
                  <td className="py-2">{app.status}</td>
                  <td className="py-2">
                    <button
                      className="mr-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                      onClick={() => handleStatusChange(app.id, "accepted")}
                    >
                      Accept
                    </button>
                    <button
                      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      onClick={() => handleStatusChange(app.id, "rejected")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No job applications found</p>
        )}
      </div>
    </div>
  );
};

export default EmployerDashboard;
