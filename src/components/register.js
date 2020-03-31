import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";

const Register = () => (
  
      <li class="mr-10 px-8 mb-0 py-1 rounded-full bg-base hover:text-green-700">
        <a class="text-white" href="#">
          Register
        </a>
      </li>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string
};

Navbar.defaultProps = {
  siteTitle: ``
};

export default Register;
