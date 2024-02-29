import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import loginImage from "../assets/loginpage.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="border-2 border-orange-400 rounded-lg overflow-hidden max-w-[1000px] mx-auto m-4">
        <form>
          <div class="bg-gray-100 flex justify-center items-center h-[80vh]">
            {/* Left: Image */}
            <div class="w-1/2 h-[80vh] hidden lg:block">
              <img
                src={loginImage}
                alt="Placeholder Image"
                class="object-cover w-full h-full"
              />
            </div>
            {/* Right: Login Form */}
            <div class="lg:p-28 md:p-52 sm:20 p-6 w-full lg:w-1/2">
              <h1 class="text-2xl font-semibold mb-4">Sign-in</h1>
              <form>
                {/* Username Input */}
                <div class="mb-4">
                  <label for="username" class="block text-gray-600">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    class="w-full border
       border-gray-300 rounded-md py-2 px-3
       focus:outline-none focus:border-blue-500"
                    autocomplete="off"
                  />
                </div>
                {/* Password Input */}
                <div class="mb-4">
                  <label for="password" class="block text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="w-full border
       border-gray-300 rounded-md py-2 px-3 focus:outline-none
        focus:border-blue-500"
                    autocomplete="off"
                  />
                </div>
                {/* Remember Me Checkbox */}
                <div class="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    class="text-blue-500"
                  />
                  <label for="remember" class="text-gray-600 ml-2">
                    Remember Me
                  </label>
                </div>
                {/* Forgot Password Link */}
                <div class="mb-6 text-blue-500">
                  <a href="#" class="hover:underline">
                    Forgot Password?
                  </a>
                </div>
                {/* Login Button */}
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                >
                  Login
                </button>
              </form>
              {/* Sign up  Link */}
              <div class="mt-6 text-blue-500 text-center">
                <Link to={"/SignUp"} class="hover:underline">
                  Sign up Here
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
