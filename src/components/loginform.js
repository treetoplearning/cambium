import React from "react";

import { Link } from "gatsby";
import "../css/global.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGoogle, faGithub);

const LoginForm = () => (
  <div className="flex items-center justify-center px-4 my-24 font-mono bg-gray-50 sm:px-6 lg:px-8">
    <div className="w-full max-w-xl px-6 pt-6 pb-12 bg-white rounded-xl md:px-36">
      <div>
        <h2 className="mt-6 text-2xl font-extrabold leading-9 text-center text-gray-900 md:text-3xl">
          Login
        </h2>
      </div>
      <form
        className="justify-between py-4 mt-4 font-mono md:mx-12"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" value="true" />
        <div className="flex flex-col shadow-sm">
          <div className="flex flex-row my-2">
            <div className="w-full">
              <button
                aria-label="Continue with Google"
                name="continueGoogle"
                readOnly
                className="relative flex items-center justify-center w-full px-3 py-2 text-white rounded-md bg-blueGoogle sm:text-sm sm:leading-5"
              >
       
      
        
                  
                
                <FontAwesomeIcon icon={faGoogle} className="absolute left-0 ml-3 text-lg" />
       

              
                <div className="w-full"> 
                <p> Continue with Google </p>
                  </div>
                
              </button>
            </div>
          </div>
          <div className="mb-10 ">
            <button
              aria-label="Continue with Google"
              name="continueGoogle"
              readOnly
              className="relative flex items-center justify-center w-full px-3 py-2 text-white rounded-md bg-blackGithub sm:text-sm sm:leading-5"
            >
             
             <FontAwesomeIcon icon={faGithub} className="absolute left-0 ml-3 text-lg" />
        
                  
                

                <div className="w-full"> 
                <p> Continue with Github </p>
                  </div>
            </button>
          </div>
          <div className="my-2">
            <input
              aria-label="Email/Username"
              required
              name="email/username"
              type="username"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Email or username"
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
          
        </div>

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div className="flex items-center justify-start">
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

          <div className="mt-4 text-sm leading-5 md:mt-0">
            <Link
              to="login"
              className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
            >
              Already have an account?
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
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
);

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

export default LoginForm;
