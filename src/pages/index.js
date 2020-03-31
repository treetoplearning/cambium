import React from "react";
import { Link } from "gatsby";
import Register from "../components/register";

import Navbar from "../components/navbar";

import "../css/global.css";

const IndexPage = () => (
  <div>
    <Navbar/>
    <div className="flex w-full h-64">
      <div className="w-1/6 h-64"></div>
      <div className="w-2/6 h-64">
        <div className="flex-col font-mono">
          <div className="w-2/6 h-16"></div>
          <div className="w-auto">
            <p className="text-base text-5xl font-bold"> Learning </p>
            <p className="text-base text-5xl font-bold"> starts here. </p>
            <p className="mb-2 text-xl">
              A free computer science education for any and all marginalized
              students - <span className="font-bold">
                that's our promise.
              </span>
            </p>
          
            
          <span > <Register/></span>
          </div>
          
           
        </div>
      </div>
      <div className="w-3/6"></div>
    </div>
  </div>
);

export default IndexPage;
