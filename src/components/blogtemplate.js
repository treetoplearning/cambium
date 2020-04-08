import PropTypes from "prop-types";
import React from "react";

import "../css/global.css";
import mentorship from "../static/mentorship.svg"

const BlogTemplate = () => (
  <div class="flex justify-center flex-wrap px-6 ">
  <div class="w-full lg:w-1/2 md:px-4 lg:px-6 py-5  ">
    <div class="bg-white hover:shadow-xl rounded rounded-xl transition transform duration-300 hover:scale-105 hover:opacity-75 ">
      <div class="">
        <img
          src={mentorship}
          alt=""
          class="h-56 w-full px-4 pt-4 border-white "
        />
      </div>
      <div class="px-4 py-4 md:px-10">
        <h1 class="font-bold text-lg">Treetop's first post.</h1>
        <p class="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quas sapiente voluptate earum natus facilis dolor deserunt dolorum
          tempora obcaecati consequatur rem, vel distinctio perferendis tempore
          nemo sequi eos accusantium...
        </p>
        <div class="flex flex-col sm:flex-row justify-between pt-8">
          <div class="flex text-sm font-medium">April 6, 2020</div>
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

);

BlogTemplate.propTypes = {
  source: PropTypes.string,
};

BlogTemplate.defaultProps = {};

export default BlogTemplate;













