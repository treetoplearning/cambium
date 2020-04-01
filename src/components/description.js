import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";


const Description = ({title, body}) => (
  <div class="flex w-64 text-white font-mono">
    <div className="flex-row w-full">
        <p className="text-3xl underline">
            {title}
        </p>
        <p className="text-md ">
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
  
};

export default Description;
