import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/jobs", {
        title,
        description,
        location,
        jobType,
        salaryRange,
        category,
      });
      toast.success("Job created successfully!");
      // Clear the form
      setTitle("");
      setDescription("");
      setLocation("");
      setJobType("");
      setSalaryRange("");
      setCategory("");
    } catch (error) {
      toast.error("Error creating job. Please try again.");
      console.error("Error creating job", error);
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded bg-white p-4 shadow">
      <h2 className="mb-4 text-2xl font-bold">Create Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Job Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
            required
          >
            <option value="">Select Job Type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            {/* Add other job types as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Salary Range</label>
          <input
            type="text"
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
            required
          >
            <option value="">Select Category</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
            {/* Add other job categories as needed */}
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 p-2 text-white"
        >
          Create Job
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
