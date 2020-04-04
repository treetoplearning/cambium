import Holder from "../components/holder";
import Description from "../components/description";

import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";

const LandingCard = ({ title, body, src }) => (
  <div className="flex justify-between w-full">
    <div className="flex items-center w-1/2 p-4">
      <Description title={title} body={body} />
    </div>
    <div className="flex items-center w-1/2 p-8">
      <Holder src={src} />
    </div>
  </div>
);

LandingCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  src: PropTypes.string
};

LandingCard.defaultProps = {};

export default LandingCard;
