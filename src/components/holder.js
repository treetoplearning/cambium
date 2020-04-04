import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";


const Holder = ({src}) => (
  <div className="">
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg">
        <img src={src}/>
    </div>
  </div>
);

Holder.propTypes = {
  source: PropTypes.string
};

Holder.defaultProps = {
  
};

export default Holder;
