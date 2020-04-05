import React from "react";
import RegisterButton from "./registerbutton";

import logo from "../static/logo.svg";
import { Link } from "gatsby";

import "../css/global.css";

const Navbar = () => (
  <div className="flex items-center justify-between w-full h-20 font-mono">
    <div className="flex w-12 ml-8">
      <Link to="/">
        <img className="mb-0" src={logo} alt="logo" />
      </Link>
    </div>

    <ul class="flex items-center">
      <li class="mr-8 mb-0">
        <Link to="/about">
          <p className="text-base hover:text-green-700">About </p>
        </Link>
      </li>
      <li class="mr-8 mb-0">
        <Link to="/about">
          <p className="text-base hover:text-green-700" to="/contact">
            Contact{" "}
          </p>
        </Link>
      </li>
      <RegisterButton />
    </ul>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
