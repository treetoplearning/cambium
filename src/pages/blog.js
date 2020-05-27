import React from "react"
import BlogPreview from "../components/blogpreview"

import blog from "../static/blog.svg"
import "../css/global.css"

const bodyColor = {
  background:
    "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)"
}

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <div className="flex flex-col font-mono">
      <div className="flex justify-center w-full pt-10">
        <img src={blog} alt="hello" />
      </div>
      <div className="flex flex-col w-full h-auto pb-12 " style={bodyColor}>
        <section className="py-12">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <h1 className="px-6 pb-6 text-2xl font-black text-white md:px-12">
                Code Green - Treetop Learning's Official Blog
              </h1>
            </div>
            <div className="flex flex-col justify-center">
              {edges.map(e => (
                <BlogPreview node={e.node} key={e.node.id}></BlogPreview>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          html
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            date
            image
          }
        }
      }
    }
  }
`
