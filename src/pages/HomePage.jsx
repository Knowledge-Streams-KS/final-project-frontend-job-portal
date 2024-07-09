// src/pages/HomePage.jsx

import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <div className="hero-section bg-blue-500 p-8 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">Find Your Dream Job</h1>
        <p className="text-lg">
          Explore thousands of job opportunities across various industries.
        </p>
      </div>
      <div className="features-section grid grid-cols-1 gap-4 p-8 md:grid-cols-3">
        <div className="feature-card rounded bg-white p-4 shadow">
          <h2 className="mb-2 text-2xl font-bold">Easy to Use</h2>
          <p>
            Our platform is designed to be user-friendly and easy to navigate.
          </p>
        </div>
        <div className="feature-card rounded bg-white p-4 shadow">
          <h2 className="mb-2 text-2xl font-bold">Wide Range of Jobs</h2>
          <p>Find job opportunities in various fields and locations.</p>
        </div>
        <div className="feature-card rounded bg-white p-4 shadow">
          <h2 className="mb-2 text-2xl font-bold">Secure and Reliable</h2>
          <p>We ensure the security and reliability of our platform.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
