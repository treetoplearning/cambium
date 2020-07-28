import React from "react"
import Button from "../components/button"
import LandingCard from "../components/landingcard"

import wave from "../static/wave.svg"
import connection from "../static/connection.svg"
import creativity from "../static/creativity.svg"
import "../css/global.css"

const bodyColor = {
  background: "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)"
}

const IndexPage = () => {

  return (
    <div className="flex flex-col font-mono ">
      <div className="flex w-full">
        <div className="hidden w-1/6 md:flex"></div>
        <div className="flex-col p-8 w-100 md:p-0 md:w-3/6 md:mt-12">
          <p className="text-base text-4xl font-bold leading-tight md:text-5xl">Learning starts</p>
          <p className="mb-1 text-base text-4xl font-bold leading-tight md:text-5xl">with Treetop.</p>
          <p className="pr-16 mb-2 text-md md:text-xl">
            A free computer science education for any and all marginalized students -{" "}
            <span className="font-bold">that's our promise.</span>
          </p>
          <div className="flex">
            <Button text="Register Today" s isTitle={true} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <img className="w-full mt-2 transform scale-105" src={wave} alt="" />
      </div>
      <div className="flex flex-col w-full h-auto pb-12 bg-base" style={bodyColor}>
        <div className="flex flex-row">
          <div className="hidden w-1/6 md:flex"> </div>
          <div className="mt-16 w-100 md:w-4/6">
            <LandingCard
              title="Creativity"
              body="With Treetop, your student will have access to a world-class computer science education from the comfort of their computer screen - at no cost. With the help of their own personal instructor, your student will go from fundamentals to a project of their choosing."
              src={creativity}
            />
          </div>
          <div className="hidden w-1/6 md:flex"> </div>
        </div>
        <div className="flex flex-row">
          <div className="hidden w-1/6 md:flex"> </div>
          <div className="mt-4 w-100 md:w-4/6">
            <LandingCard
              title="Support"
              reversed={true}
              body="Treetop seeks to educate beyond financial barriers and support non-traditional students in computer science. Treetop’s remote lessons will give your student the tools they need to succeed in industry or on any path of their choosing."
              src={connection}
            />
          </div>
          <div className="hidden w-1/6 md:flex"> </div>
        </div>
        <div className="w-full mt-8"></div>
      </div>
    </div>
  )
}

export default IndexPage