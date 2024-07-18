// // api.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5173", // Ensure this matches your backend URL
// });

// export const registerJobSeeker = async (userData) => {
//   try {
//     const response = await api.post("/auth/jobseeker/register", userData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchJobs = async () => {
//   try {
//     const response = await api.get("/jobs");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
