import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const JobSeekerRegister = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/jobseeker/register",
        values,
      );
      console.log("Registration successful:", response.data);
      toast.success("Registration successful. Redirecting to sign in...");
      setTimeout(() => {
        navigate("/jobseeker/signin");
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl">Register as a Job Seeker</h1>
        <p className="mb-4 text-center">
          Already Registered?{" "}
          <Link to="/jobseeker/signin" className="text-blue-500">
            Login as a Job Seeker
          </Link>
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label htmlFor="firstName" className="mb-1 block text-gray-600">
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="w-full rounded-md border px-3 py-2"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="mt-1 text-red-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1 block text-gray-600">
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="w-full rounded-md border px-3 py-2"
              />
              <ErrorMessage
                name="lastName"
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
  );
};

export default JobSeekerRegister;
