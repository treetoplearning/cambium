import Holder from "../components/holder";
import Description from "../components/description";

import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";

const LandingCard = ({ title, body, src, reversed }) => (
  
  <div className={'flex justify-between w-full ' + (reversed ? 'flex-row-reverse' : '')}>
    <div className="flex items-center w-1/2 p-6">
      <Description title={title} body={body} />
    </div>
    <div className="flex items-center w-1/2 p-6">
      <Holder src={src} />
    </div>
  </div>
);


LandingCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  src: PropTypes.string,
  reversed: PropTypes.bool
};

LandingCard.defaultProps = {};

export default LandingCard;
