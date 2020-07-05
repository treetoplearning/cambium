import Holder from "../components/holder"
import Description from "../components/description"

import PropTypes from "prop-types"
import React from "react"

import "../css/global.css"

const LandingCard = ({ title, body, src, reversed }) => (
  <div
    className={
      "flex justify-between w-full flex-col " +
      (reversed ? "md:flex-row-reverse" : "md:flex-row")
    }
  >
    <div className={"flex mx-4 md:mx-0 items-center w-100 md:w-1/2 " + (reversed ? "pl-6" : "pr-6")}>
      <Description title={title} body={body} />
    </div>
    <div className={"flex items-center py-6 py w-100 md:w-1/2 " + (reversed ? "pt-6 pr-6" : "pt-6 pl-6")}>
      <Holder src={src} />
    </div>
  </div>
)

LandingCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  src: PropTypes.string,
  reversed: PropTypes.bool
}

LandingCard.defaultProps = {}

export default LandingCard
