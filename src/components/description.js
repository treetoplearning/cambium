import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";

const Description = ({ title, body }) => (
  <div class="flex flex-col text-white font-mono">
    <p className="ml-6 text-xl font-medium underline sm:text-3xl">{title}</p>
    <p className="text-center text-md sm:text-lg ">{body}</p>
  </div>
);

Description.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

Description.defaultProps = {
  title: "",
  body: ""
};

export default Description;
