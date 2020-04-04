import PropTypes from "prop-types";
import React from "react";

import logo from "../images/logo.svg";
import "../css/global.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebook,
  faGithubAlt,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faFacebook, faGithub);

const Footer = () => (
  <div className="">
    <div className="flex flex-row h-auto pt-10 pb-10 font-mono bg-bark">
      <div className="flex w-1/6"></div>
      <div className="flex flex-col w-4/6 font-hairline text-white">
        <div className="flex flex-row">
          <div className="flex flex-col w-1/2">
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

          <div className="flex flex-col justify-center w-1/2 ">
            <div className="flex self-center justify-center w-64 h-48 bg-white rounded-lg">
              <img src={logo} />
            </div>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="flex flex-row justify-between mt-8">
          <div className="flex">
            <p className="mr-8"> Sponsor </p>
            <p className="mr-8"> Sponsor </p>
            <p className="mr-8"> Sponsor </p>
            <p className="mr-8"> Sponsor </p>
          </div>
          <div className="flex">
            <a className="ml-8">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="ml-8">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="ml-8">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
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
