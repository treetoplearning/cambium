import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

import "../css/global.css";
import mentorship from "../static/mentorship.svg";
import { Link } from "gatsby";
import { format } from 'date-fns'

const BlogPreview = (node) => {

  return(
  <Link to={node.node.frontmatter.path}>
    <div className="flex flex-wrap justify-center px-6 ">
      <div className="w-full py-5 lg:w-1/2 md:px-4 lg:px-6 ">
        <div className="transition duration-300 transform bg-white rounded hover:shadow-xl rounded-xl hover:scale-105 hover:opacity-75 ">
          <div className="">
            <img
              src={node.node.frontmatter.image}
              alt="mentorship"
              className="w-full h-56 px-8 pt-8 border-white "
            />
          </div>
          <div className="px-4 py-4 md:px-10">
            <h1 className="text-lg font-bold">{node.node.frontmatter.title}</h1>
          
            <div className="flex flex-col justify-between pt-8 sm:flex-row">
              <div className="flex text-sm font-medium">{format(new Date(node.node.frontmatter.date), 'MM/dd/yyyy')}</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
)};

BlogPreview.propTypes = {
};

BlogPreview.defaultProps = {};

export default BlogPreview;
