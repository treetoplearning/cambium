import PropTypes from "prop-types";
import React from "react";
import Register from "../components/register";
import logo from "../images/logo.svg";

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
      <Register />
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
