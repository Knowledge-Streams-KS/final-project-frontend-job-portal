// src/pages/Employer/EmployerSignIn.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployerSignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/employer/login",
        values,
      );
      console.log("Login successful:", response.data);
      // Show a success message or redirect to dashboard
      alert("Login successful. Redirecting to dashboard.");
      // Redirect logic here
    } catch (error) {
      console.error("Login error:", error);
      // Handle login failure, show error message
      alert("Login failed. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded bg-white p-8 shadow-md">
          <h1 className="mb-6 text-center text-3xl">Employer Sign In</h1>
          <p className="mb-4 text-center">
            Not Registered?{" "}
            <Link to="/employer/register" className="text-blue-500">
              Register as an Employer
            </Link>
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-4">
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
                Sign In
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EmployerSignIn;
