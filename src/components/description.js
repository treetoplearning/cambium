import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";


const Description = ({title, body}) => (
  <div class="flex w-128 text-white font-mono">
    <div className="flex-row w-full">
        <p className="ml-6 text-3xl font-medium underline">
            {title}
        </p>
        <p className="text-lg text-center ">
            {body}
        </p>
    </div>
  </div>
);

Description.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

Description.defaultProps = {
  title: '',
  body: ''
};

export default Description;
