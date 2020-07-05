import React from "react"
import { graphql } from "gatsby"

import { format } from "date-fns"

import "../css/markdown.css"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <div className="w-full">
      <div className="flex justify-center px-6 font-mono bg-white">
        <div className="flex w-full py-5 lg:w-1/2 md:px-4 lg:px-6">
          <div className="transition transform bg-white rounded-lg ">
            <img
              src={post.frontmatter.image}
              alt="mentorship"
              className="w-full h-56 px-4 pt-4 border-white "
            />

            <div className="px-4 py-4 md:px-10">
              <h1 className="text-3xl font-bold">{post.frontmatter.title} </h1>
              <div className="markdown">
                <p
                  className="py-4 "
                  dangerouslySetInnerHTML={{ __html: post.html }}
                ></p>
              </div>
              <div className="flex flex-col justify-between pt-8 sm:flex-row">
                <div className="flex text-sm font-medium">
                  {format(new Date(post.frontmatter.date), "MM/dd/yyyy")}
                </div>

                <div className="flex ">
                  <div className="flex justify-between text-sm font-medium">
                    Share:
                    <a href="" className="px-1 text-blue-700 ">
                      Facebook
                    </a>
                    <a href="" className="px-1 text-blue-500 ">
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
  )
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
`
