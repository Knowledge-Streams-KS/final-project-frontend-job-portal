// src/pages/Employer/EmployerRegister.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployerRegister = () => {
  const initialValues = {
    companyName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/employer/register",
        values,
      );
      console.log("Registration successful:", response.data);
      // Show a success message or redirect to login page
      alert("Registration successful. Please proceed to login.");
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration failure, show error message
      alert("Registration failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded bg-white p-8 shadow-md">
          <h1 className="mb-6 text-center text-3xl">Register as an Employer</h1>
          <p className="mb-4 text-center">
            Already Registered?{" "}
            <Link to="/employer/signin" className="text-blue-500">
              Login as an Employer
            </Link>
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="companyName"
                  className="mb-1 block text-gray-600"
                >
                  Company Name
                </label>
                <Field
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="w-full rounded-md border px-3 py-2"
                />
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="mt-1 text-red-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-gray-600">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border px-3 py-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-red-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-1 block text-gray-600">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full rounded-md border px-3 py-2"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="mt-1 text-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-2 text-white transition hover:bg-blue-600"
              >
                Register
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EmployerRegister;
