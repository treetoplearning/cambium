import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";

const Register = ({ text, siteURL }) => (
  <div class="mr-10 px-8 mb-0 py-1 rounded-full bg-base hover:text-green-700">
    <a class="text-white" href={siteURL}>
      {text}
    </a>
  </div>
);

Register.propTypes = {
  siteTitle: PropTypes.string,
  text: PropTypes.string,
  siteURL: PropTypes.string
};

Register.defaultProps = {
  siteTitle: ``,
  text: `Register`,
  siteURL: `#registerpage`
};

export default Register;
