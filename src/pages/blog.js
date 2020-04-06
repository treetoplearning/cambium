import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import blog from "../static/blog.svg";
import "../css/global.css";

const bodyColor = {
  background:
    "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)",
};

const BlogPage = () => (
  <div className="flex flex-col">
    <Navbar />
    <div className="flex justify-center w-full pt-10">
        <img src={blog} alt="hello" />
      </div>
    <div
      className="flex flex-col w-full h-auto pb-12 "
      style={bodyColor}
    >
      
    </div>
    <div id="contact">
      <Footer />
    </div>
  </div>
);

export default BlogPage;
