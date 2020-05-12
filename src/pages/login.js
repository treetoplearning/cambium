import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoginForm from "../components/loginform.js"

import programmer from "../static/programmer.svg";

import "../css/global.css";

const bodyColor = {
  background:
    "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)",
};

const LoginPage = () => (
  <div className="flex flex-col">
    <Navbar />
    <div className="flex justify-center w-full mt-24 -mb-1 align-bottom">
      <img src={programmer} alt="programmer"/>
    </div>

    <div
      className="flex flex-col w-full bg-base"
      style={bodyColor}
    >


      <LoginForm/>
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default LoginPage;
