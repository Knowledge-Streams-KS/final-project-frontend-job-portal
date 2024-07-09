// src/pages/JobSeeker/JobSeekerDashboard.jsx

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const JobSeekerDashboard = () => {
  // Placeholder for job applications data
  const applications = [
    { id: 1, jobTitle: "Software Engineer", status: "Pending" },
    { id: 2, jobTitle: "Project Manager", status: "Accepted" },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <div className="p-8">
        <h1 className="mb-4 text-2xl">Manage Your Applications</h1>
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="rounded border p-4">
              <h2 className="text-xl font-bold">{app.jobTitle}</h2>
              <p>
                <strong>Status:</strong> {app.status}
              </p>
              <button className="rounded bg-red-500 p-2 text-white">
                Withdraw
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default JobSeekerDashboard;
