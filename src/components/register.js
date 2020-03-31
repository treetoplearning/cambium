import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";

const Register = () => (
  
    
      <div class="mr-10 max-w-xxs px-8 w-{width} mb-0 py-1 rounded-full bg-base hover:text-green-700">
        <a class="text-white" href="#hello">
          Register
        </a>
      </div>
);

Register.propTypes = {
  siteTitle: PropTypes.string
};

Register.defaultProps = {
  siteTitle: ``
};

export default Register;
