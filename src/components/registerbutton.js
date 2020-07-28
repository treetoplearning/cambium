import PropTypes from "prop-types"
import React from "react"

import "../css/global.css"

const RegisterButton = ({ text }) => (
  <a href="https://treetop-heartwood-account.netlify.com">
    <p className="px-8 py-1 text-sm leading-tight text-white transition duration-100 ease-in-out rounded-lg shadow appearance-none md:text-lg bg-base hover:bg-green-700 focus:outline-none focus:shadow-outline">{text}</p>
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
