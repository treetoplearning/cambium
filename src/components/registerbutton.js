import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";

const RegisterButton = ({ text, siteURL }) => (
  <a class="text-white" href={siteURL}>
    <div class="mr-10 px-8 mb-0 py-1 rounded-full bg-base">{text}</div>
  </a>
);

RegisterButton.propTypes = {
  siteTitle: PropTypes.string,
  text: PropTypes.string,
  siteURL: PropTypes.string,
};

RegisterButton.defaultProps = {
  siteTitle: ``,
  text: `Register`,
  siteURL: `#registerpage`,
};

export default RegisterButton;
