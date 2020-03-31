import PropTypes from "prop-types";
import React from "react";

import logo from "../images/logo.svg"


import "../css/global.css";

const Navbar = () => (
  <div className="flex items-center justify-between w-full h-20 font-mono">
    <div className="w-12 ml-8">
       
        <img className="mb-0" src={logo} />
    </div>
    <ul class="flex items-center">
      <li class="mr-8 mb-0">
        <a class="text-base hover:text-green-700" href="#">
          About
        </a>
      </li>
      <li class="mr-8 mb-0">
        <a class="text-base hover:text-green-700" href="#">
          Contact
        </a>
      </li>
      <li class="mr-10 px-8 mb-0 py-1 rounded-full bg-base hover:text-green-700">
        <a class="text-white" href="#">
          Register
        </a>
      </li>
    </ul>
  </div>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string
};

Navbar.defaultProps = {
  siteTitle: ``
};

export default Navbar;
