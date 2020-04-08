import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BlogTemplate from "../components/blogtemplate";

import blog from "../static/blog.svg";
import "../css/global.css";

const bodyColor = {
  background:
    "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)",
};

const BlogPage = () => (
  <div className="flex flex-col font-mono">
    <Navbar />
    <div className="flex justify-center w-full pt-10">
        <img src={blog} alt="hello" />
      </div>
    <div
      className="flex flex-col w-full h-auto pb-12 "
      style={bodyColor}
    >
        <section className="flex py-12">
        <div className="container mx-auto">
            <div>
                <h1 className="flex justify-center px-6 pb-6 text-2xl font-black text-white md:px-12">
                    Code Green - Treetop Learning's Official Blog
                </h1>
            </div>
            <div className="flex justify-center">
            <BlogTemplate/>
            </div>
            
        </div>
    </section>
      
    </div>
    <div id="contact">
      <Footer />
    </div>
  </div>
);

export default BlogPage;
