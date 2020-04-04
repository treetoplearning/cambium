import React from "react";
import Register from "../components/register";
import Navbar from "../components/navbar";
import LandingCard from "../components/landingcard";
import Footer from "../components/footer";

import mentorship from "../images/mentorship.svg";
import wave from "../images/wave.svg";
import professor from "../images/professor.svg";
import connection from "../images/connection.svg";
import "../css/global.css";

const bodyColor = {
  background: "rgb(82,140,109)",
  background:
    "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)"
};

const footerColor = {
  background: "rgb(133,93,81)",
  background:
    "linear-gradient(180deg, rgba(133,93,81,1) 0%, rgba(164,129,119,1) 100%, rgba(168,134,124,1) 100%)"
};

const RegisterPage = () => (
  <div className="flex flex-col">
    <Navbar />
    <div className="flex justify-center w-full">
      <img src={mentorship}/>
    </div>
    

    <div
      className="flex flex-col w-full h-auto pb-12 bg-base"
      style={bodyColor}
    >
     
    </div>
    <div >
      <Footer />
    </div>
  </div>
);

export default RegisterPage;
