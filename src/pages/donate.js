import React from "react"

import donate from "../static/donate.svg"
import "../css/global.css"

const bodyColor = {
  background: "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)"
}

const DonatePage = () => (
  <div className="flex flex-col">
    <div className="flex justify-center w-full pt-10 align-bottom">
      <img src={donate} alt="donate" />
      
    </div>

    <div className="flex flex-col w-full h-auto h-screen pb-12 bg-base" style={bodyColor}>
    </div>
  </div>
)

export default DonatePage
