import React from "react";
import { graphql } from "gatsby";

import { format } from "date-fns";

import "../css/markdown.css";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="w-full">

      <div class="flex justify-center bg-white px-6 font-mono">
        <div class="flex w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
          <div class="bg-white rounded-lg transition transform ">
              <img
                src={post.frontmatter.image}
                alt="mentorship"
                class="h-56 w-full px-4 pt-4 border-white "
              />
        
            <div class="px-4 py-4 md:px-10">
              <h1 class="font-bold text-3xl">{post.frontmatter.title} </h1>
              <div class="markdown">
                <p
                  class=" py-4"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                ></p>
               
              </div>
              <div class="flex flex-col sm:flex-row justify-between pt-8">
                     <div className="flex text-sm font-medium">{format(new Date(post.frontmatter.date), 'MM/dd/yyyy')}</div>

                <div class="flex ">
                  <div class="flex text-sm justify-between font-medium">
                    Share:
                    <a href="" class="text-blue-700 px-1 ">
                      Facebook
                    </a>
                    <a href="" class="text-blue-500 px-1 ">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        image
      }
    }
  }
`;
