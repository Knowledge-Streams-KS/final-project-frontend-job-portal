import React from "react";

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

  return (
    <form onSubmit={handleSearch} className="bg-gray-100 p-4">
      <div className="flex flex-wrap items-center space-x-4">
        <input
          type="text"
          placeholder="Enter job title"
          className="w-full rounded border border-gray-300 p-2 sm:w-auto"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full rounded border border-gray-300 p-2 sm:w-auto"
        />
        <select className="w-full rounded border border-gray-300 p-2 sm:w-auto">
          <option value="">Job Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          {/* Add other job types */}
        </select>
        <input
          type="text"
          placeholder="Salary Range"
          className="w-full rounded border border-gray-300 p-2 sm:w-auto"
        />
        <select className="w-full rounded border border-gray-300 p-2 sm:w-auto">
          <option value="">Job Category</option>
          <option value="it">IT</option>
          <option value="finance">Finance</option>
          {/* Add other job categories */}
        </select>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 p-2 text-white sm:w-auto"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
