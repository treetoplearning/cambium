import React from "react";
import Register from "../components/register";
import Navbar from "../components/navbar";
import LandingCard from "../components/landingcard";
import ReverseLandingCard from "../components/reverselandingcard"
import Footer from "../components/footer"

import wave from "../images/wave.svg";
import professor from "../images/professor.svg";
import connection from "../images/connection.svg";
import background from "../images/background.svg";
import "../css/global.css";

const bodyColor = {
  background: "rgb(82,140,109)",
  background:
    "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)"
};



const IndexPage = () => (
  <div className="flex flex-col">
    <Navbar />
    <div className="flex w-full">
      <div className="w-1/6 "></div>
      <div className="flex-col w-2/6 mt-10 font-mono">
        <p className="text-base text-5xl font-bold leading-tight">Learning</p>
        <p className="mb-1 text-base text-5xl font-bold leading-tight">
          starts here.
        </p>
        <p className="mb-2 text-xl">
          A free computer science education for any and all marginalized
          students - <span className="font-bold">that's our promise.</span>
        </p>
        <div className="flex">
          <Register text="Register Today" siteURL="#registerpage" />
        </div>
      </div>
    </div>
    <div className="overflow-hidden">
      <img className="w-full mt-16 transform scale-105" src={wave} />
    </div>

    <div
      className="flex flex-col w-full h-auto bg-base"
      style={bodyColor}
    >
      <div className="mt-16">
        <LandingCard
          title="Creativity"
          body="With Treetop, your student will have access to a world-class computer science education from the comfort of their computer screen. With the help of their own personal instructor, your student will go from fundamentals to a project of their choosing - all absolutely free."
          src={professor} 
        />
      </div>
       <div className="mt-16 mb-16">
        <ReverseLandingCard
          title="Support"
          body="Treetop seeks to educate beyond financial barriers, and support non-traditional students in computer science. Treetop’s remote lessons will give your student the tools they need to succeed in industry or on any path of their choosing. Find out more here."
          src={connection} 
        />
      </div>
    </div>
    <Footer/>
  </div>
);

export default IndexPage;
