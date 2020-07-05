import PropTypes from "prop-types"
import React from "react"

import "../css/global.css"

const RegisterButton = ({ text }) => (
  <a href="https://treetop-heartwood-dev.netlify.com">
    <p className="px-8 py-1 mb-0 mr-10 text-white transition duration-100 ease-in-out rounded-lg shadow hover:bg-green-700 focus:shadow-outline-indigo bg-base">{text}</p>
  </a>
)

RegisterButton.propTypes = {
  siteTitle: PropTypes.string,
  text: PropTypes.string,
  siteURL: PropTypes.string
}

RegisterButton.defaultProps = {
  siteTitle: ``,
  text: `Register`,
  siteURL: `#registerpage`
}

export default RegisterButton
