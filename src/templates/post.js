import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className="w-full font-mono bg-base">
      <section className="py-12">
        <div className="container mx-auto">
          <div>
            <h1 className="px-6 pb-6 text-2xl font-black text-white md:px-12">
              <h1>{post.frontmatter.title}</h1>
            </h1>
          </div>
          <div className="flex flex-wrap px-6">
            <div className="w-full py-5 lg:w-1/2 md:px-4 lg:px-6">
              <div className="bg-white hover:shadow-xl">
                <div className="">
                  <img
                    src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    className="w-full h-56 border-8 border-white hover:opacity-25"
                  />
                </div>
                <div className="px-4 py-4 md:px-10">
                  <h1 className="text-lg font-bold">UI,UX Concepts</h1>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi quas sapiente voluptate earum natus facilis dolor
                    deserunt dolorum tempora obcaecati consequatur rem, vel
                    distinctio perferendis tempore nemo sequi eos accusantium.
                  </p>
                  <div className="flex flex-wrap pt-8">
                    <div className="w-full text-sm font-medium md:w-1/3">
                      NOVEMBER 1, 2019
                    </div>
                    <div className="2/3">
                      <div className="text-sm font-medium">
                        SHARE:
                        <a href="" className="px-2 text-blue-700 ">
                          FACEBOOK
                        </a>
                        <a href="" className="px-2 text-blue-500 ">
                          TWITTER
                        </a>
                        <a href="" className="px-2 text-red-600">
                          GOOGLE+
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      }
    }
  }
`;
