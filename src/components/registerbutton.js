import PropTypes from "prop-types"
import React from "react"

import "../css/global.css"

const RegisterButton = ({ text }) => (
  <a href="https://treetop-heartwood-account.netlify.com">
    <p class="px-8 py-1 rounded-lg text-sm md:text-lg text-white bg-base transition duration-100 ease-in-out hover:bg-green-700 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline">{text}</p>
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
