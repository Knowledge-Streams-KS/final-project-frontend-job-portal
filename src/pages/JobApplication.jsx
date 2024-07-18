import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const JobApplication = () => {
  const { jobId } = useParams(); // Retrieve jobId from URL parameters
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);

    try {
      const response = await axios.post(
        `http://localhost:3000/jobApplications/${jobId}/apply`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      toast.success("Job application submitted successfully");
      navigate("/jobseeker/dashboard"); // Redirect to employer dashboard
    } catch (error) {
      toast.error(
        `Error submitting application: ${error.response?.data?.message || error.message}`,
      );
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Apply for Job</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Resume</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
