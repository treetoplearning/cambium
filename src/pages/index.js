import React from "react";
import { Link } from "gatsby";
import Register from "../components/register";

import Navbar from "../components/navbar";

import "../css/global.css";

const IndexPage = () => (
  <div>
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
  </div>
);

export default IndexPage;
