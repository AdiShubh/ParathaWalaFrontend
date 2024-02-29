import React from "react";
import loginImage from "../assets/loginpage.jpeg";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
const BASE_URL = process.env.BASE_URL;

// Define validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/createUser`,
        values
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <>
      <div className="border-2 border-orange-400 rounded-lg overflow-hidden max-w-[1000px] mx-auto m-4">
        <div className="bg-gray-100 flex justify-center items-center h-[90vh]">
          {/* Left Image */}
          <div className="w-1/2 h-[90vh] hidden lg:block">
            <img
              src={loginImage}
              alt="Placeholder Image"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Right  Login Form */}
          <div className="lg:p-28 md:p-52 sm:20 p-6 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Sign-Up</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div class="mb-4">
                  <label htmlFor="firstName" className="block text-gray-600">
                    First Name
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div class="mb-4">
                  <label htmlFor="lastName" className="block text-gray-600">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border
                     border-gray-300 rounded-md py-2 px-3
                     focus:outline-none focus:border-blue-500"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="text-red-500"
                  />
                </div>

                <div class="mb-4">
                  <label htmlFor="email" className="block text-gray-600">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border
                     border-gray-300 rounded-md py-2 px-3 focus:outline-none
                     focus:border-blue-500"
                    autocomplete="off"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div class="mb-4">
                  <label htmlFor="password" className="block text-gray-600">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    class="w-full border
                     border-gray-300 rounded-md py-2 px-3 focus:outline-none
                     focus:border-blue-500"
                    autocomplete="off"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-orange-400 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                  >
                    Sign Up
                  </button>
                </div>
                {/* Login  Link */}
                <div className="mt-6 text-blue-500 text-center">
                  <Link to={"/Login"} className="hover:underline">
                    Already a member ? Login Here
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
