import React from "react";

import { Link } from "gatsby";
import "../css/global.css";

const RegisterForm = () => (
  <div className="flex items-center justify-center min-h-screen px-4 font-mono bg-gray-50 sm:px-6 lg:px-8">
    <div className="w-full max-w-xl py-8 bg-white rounded-lg px-36">
      <div>
        <h2 className="mt-6 text-lg font-extrabold leading-9 text-center text-gray-900 md:text-3xl">
          Register to access Treetop
        </h2>
      </div>
      <form
        className="justify-between py-4 mx-12 mt -8"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" value="true" />
        <div className="flex flex-col shadow-sm">
          <div className="flex flex-row my-2 ">
            <div className="w-1/2 pr-2">
              <input
              required
                aria-label="First Name"
                name="firstName"
                type="name"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
              required
                aria-label="Last Name"
                name="lastName"
                type="name"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="my-2">
            <input
            required
              aria-label="Email"
              name="email"
              type="email"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Email"
            />
          </div>
          <div className="my-2">
            <input
              aria-label="Username"
              required
              name="username"
              type="username"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Username"
            />
          </div>
          <div className="my-2">
            <input
            required
              aria-label="Password"
              name="password"
              type="password"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
            />
          </div>
          <div className="my-2">
            <input
            required
              aria-label="Confirm Password"
              name="confirmPassword"
              type="password"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
            />
            <label
              for="remember_me"
              className="block ml-2 text-sm leading-5 text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm leading-5">
            <Link
              to="forgotpassword"
              className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-base group focus:outline-none hover:bg-green-700 focus:shadow-outline-indigo "
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-white transition duration-150 ease-in-out "
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
);

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};

export default RegisterForm;
