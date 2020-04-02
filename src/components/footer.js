import PropTypes from "prop-types";
import React from "react";
import Holder from "../components/holder";
import FontAwesomeIcon from "../components/fontawesomeicon"

import logo from "../images/logo.svg";
import "../css/global.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTwitter,
  faFacebook,
  faGithubAlt
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faFacebook, faGithubAlt);

const footerColor = {
  background: "rgb(133,93,81)",
  background:
    "linear-gradient(180deg, rgba(133,93,81,1) 0%, rgba(164,129,119,1) 100%, rgba(168,134,124,1) 100%)"
};

const Footer = () => (
  <div>
    <div
      className="flex flex-row w-full h-auto font-mono bg-bark"
      style={footerColor}
    >
      <div className="flex w-1/6"></div>
      <div className="flex flex-col w-4/6 mt-16 mb-16 font-hairline text-white">
        <div className="flex flex-row">
          <div className="w-1/2 mt-4">
            <p>
              A free computer science education for any and all marginalized
              students -{" "}
              <span className="font-extrabold"> that’s our promise. </span>
            </p>
            <p className="mt-8">
              Treetop Learning is not a registered 501(c)(3) nonprofit
              organization.
              <a className="ml-1 underline" href="#donatepage">
                Donate today.{" "}
              </a>
            </p>
          </div>
          <div className="flex w-1/6"></div>
          
          <div className="flex justify-center w-1/2">
            <div className="flex justify-center w-64 h-48 bg-white rounded-lg">
              <img src={logo} />
            </div>
          </div>
        </div>
        <div className="w-full border-full">
          <hr className="mt-12" />
        </div>
        <div className="flex flex-row w-full mt-8">
          <div className="w-1/6 mt-4"></div>

          <div className="flex justify-center w-4/6">
            <div className="flex justify-between w-3/4">
         

         

           
            </div>
            <div className="flex w-1/4">
            <div className="flex justify-between w-full">
              <FontAwesomeIcon icon={["fal", "facebook"]} size="lg" />
              <FontAwesomeIcon icon={["fas", "twitter"]} size="lg" />
              <FontAwesomeIcon icon={["far", "facebook"]} size="lg" />
            </div>
            </div>
          </div>
          <div className="w-1/6"></div>
        </div>
      </div>
      <div className="flex w-1/6"></div>
    </div>
  </div>
);

Footer.propTypes = {
  source: PropTypes.string
};

Footer.defaultProps = {};

export default Footer;
