import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"
import "../css/global.css"

const RegisterButton = ({ text }) => (
  <Link to="register">
    <p class="mr-10 px-8 mb-0 py-1 rounded-full text-white bg-base">{text}</p>
  </Link>
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
