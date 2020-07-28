import React from "react"
import LandingCard from "../components/landingcard"

import computer from "../static/computer.svg"
import teamwork from "../static/teamwork.svg"
import availability from "../static/availability.svg"
import "../css/global.css"

const bodyColor = {
  background: "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)"
}

const AboutPage = () => (
  <div className="flex flex-col">
    <div className="flex justify-center w-full pt-10 align-bottom">
      <img src={computer} alt="computer" />
      
    </div>

    <div className="flex flex-col w-full h-auto pb-12 bg-base" style={bodyColor}>
      <div className="flex flex-row">
        <div className="hidden w-1/6 md:flex"> </div>
        <div className="w-full mt-16 md:w-4/6">
          <LandingCard
            title="Mentorship"
            reversed={true}
            body="Treetop offers much more than lessons in coding. With the help of instructors from the nation’s most elite universities, your child will recieve an industry-relevant education so that they are prepared for all aspects of studying computer science."
            src={teamwork}
          />
        </div>
        <div className="hidden w-1/6 md:flex"> </div>
      </div>
      <div className="flex flex-row">
        <div className="hidden w-1/6 md:flex"> </div>
        <div className="w-full mt-4 md:w-4/6">
          <LandingCard
            title="Availability"
            body="Your student's undergraduate instructor will work around your child's busy schedule to find a lesson time that works for everyone. When not in lesson, your student will be equipped with resources to continue their learning and explore their own projects."
            src={availability}
          />
        </div>
        <div className="hidden w-1/6 md:flex"> </div>
      </div>
    </div>
  </div>
)

export default AboutPage