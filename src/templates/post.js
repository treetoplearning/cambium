import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";

import mentorship from "../static/mentorship.svg";
import { format } from 'date-fns'

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="w-full">
      <Navbar/>

    <div class="flex bg-white w-full flex-wrap px-6 font-mono">

      <div class="flex w-full lg:w-2/3 md:px-4 lg:px-6 py-5 ">
        <div class="bg-white rounded rounded-xl transition transform ">
          <div class="">
            <img
              src={mentorship}
              alt="mentorship"
              class="h-56 w-full px-4 pt-4 border-white "
            />
          </div>
          <div class="px-4 py-4 md:px-10">
            <h1 class="font-bold text-3xl">{post.frontmatter.title} </h1>
            <p class="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quas sapiente voluptate earum natus facilis dolor deserunt dolorum
              tempora obcaecati consequatur rem, vel distinctio perferendis
              tempore nemo sequi eos accusantium...
            </p>
            <div class="flex flex-col sm:flex-row justify-between pt-8">
              <div class="flex text-sm font-medium">{format(new Date(post.frontmatter.date), 'MM/dd/yyyy')}</div>
           
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
        title
        date
      }
    }
  }
`;
