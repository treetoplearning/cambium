import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";

const Description = ({ title, body }) => (
  <div class="flex flex-col text-white font-mono">
    <p className="ml-6 text-3xl font-medium underline">{title}</p>
    <p className="text-lg text-center ">{body}</p>
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
