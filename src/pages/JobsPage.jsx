import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const queryParams = new URLSearchParams(location.search);
        const search = queryParams.get("search") || "";
        const response = await axios.get("http://localhost:3000/jobs", {
          params: { search },
        });
        setJobs(response.data);
      } catch (error) {
        toast.error("Error fetching jobs");
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [location.search]);

  return (
    <div className="p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-lg border bg-white p-4 shadow-md"
            >
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="mt-2 text-gray-600">{job.description}</p>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Job Type:</span> {job.jobType}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Salary Range:</span>{" "}
                {job.salaryRange}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Category:</span> {job.category}
              </p>
              <Link
                to={`/apply/${job.id}`}
                className="mt-4 inline-block rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Apply
              </Link>
            </div>
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
