import React, { useState } from "react";
import axios from "axios";

const Settings = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailUpdate = async () => {
    try {
      await axios.post("http://localhost:3000/settings/update-email", {
        email,
      });
      alert("Email updated successfully");
    } catch (error) {
      alert("Error updating email");
    }
  };

  const handlePasswordUpdate = async () => {
    try {
      await axios.post("http://localhost:3000/settings/update-password", {
        password,
      });
      alert("Password updated successfully");
    } catch (error) {
      alert("Error updating password");
    }
  };

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-5 shadow-md">
      <h2 className="mb-5 text-center text-2xl font-bold">Settings</h2>
      <div>
        <label className="mb-2 block font-bold text-gray-700">New Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="mb-3 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={handleEmailUpdate}
          className="w-full rounded bg-blue-500 p-3 text-white hover:bg-blue-700"
        >
          Update Email
        </button>
      </div>
      <div>
        <label className="mb-2 block font-bold text-gray-700">
          New Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="mb-3 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={handlePasswordUpdate}
          className="w-full rounded bg-blue-500 p-3 text-white hover:bg-blue-700"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Settings;
