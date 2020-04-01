import React from "react";
import Register from "../components/register";
import Navbar from "../components/navbar";

import wave from "../images/wave.svg";
import background from "../images/background.svg"
import "../css/global.css";

const backgroundColor = {
  background: 'rgb(82,140,109)',
  background: 'linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)'
}

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
          <Register text="Register Now" siteURL="#registerpage" />
        </div>
      </div>
    </div>
    <div className="overflow-hidden">
      <img className="w-full mt-16 transform scale-105" src={wave} />
    </div>
    
    <div className="w-full h-64 bg-base" style={backgroundColor}>
        
    </div>
  </div>
);

export default IndexPage;
