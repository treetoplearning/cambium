import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";


const Holder = ({src}) => (
  <div class="flex bg-white w-64 h-48 rounded-lg">
    <div className="flex justify-center p-4">
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
