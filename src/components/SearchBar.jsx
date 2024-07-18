import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/jobs?search=${search}`);
  };

  return (
    <div className="flex justify-center p-4">
      <form onSubmit={handleSearchSubmit} className="w-full md:w-auto">
        <input
          type="text"
          placeholder="Search jobs"
          value={search}
          onChange={handleSearchChange}
          className="mb-4 w-full rounded-lg border border-gray-300 p-2 md:w-auto"
        />
        <button
          type="submit"
          className="ml-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
