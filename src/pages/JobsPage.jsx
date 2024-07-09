import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchJobs } from "../axios/api";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="mb-4 text-2xl">Latest Jobs</h1>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="rounded border p-4">
              <h2 className="text-xl font-bold">{job.title}</h2>
              <p>{job.description}</p>
              <p>
                <strong>Employer:</strong> {job.employerName}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Posted on:</strong>{" "}
                {new Date(job.postedDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
