import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const EmployerSignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

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
      await login(values, "employer");
      toast.success("Login successful. Redirecting to dashboard...", {
        onClose: () => navigate("/employer/dashboard"),
      });
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
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
              className="w-full rounded-md bg-blue-500 py-2 text-white"
            >
              Sign In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EmployerSignIn;
