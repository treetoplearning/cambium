import Holder from "../components/holder";
import Description from "../components/description";

import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";

const LandingCard = ({ title, body, src }) => (
  <div className="flex items-center w-full">
    <div className="w-1/6"></div>
    <div className="flex justify-start w-2/6">
      <Description title={title} body={body} />
    </div>
    <div className="flex justify-end w-2/6">
      <Holder src={src} />
    </div>
    <div className="w-1/6"></div>
  </div>
  
);

LandingCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  src: PropTypes.string
};

LandingCard.defaultProps = {};

export default LandingCard;
