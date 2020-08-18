import React from "react"
import { Helmet } from 'react-helmet'

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"

export default function Layout({ children, pageContext }) {
  if (pageContext.layout === "blogPost") {
    return (
      <>
      <Helmet>
          <title>{"Treetop Learning"}</title>
        </Helmet>
        {" "}
        <Navbar /> {children}{" "}
      </>
    )
  }
  return (
    <>
    <Helmet>
          <title>{ "Treetop Learning" }</title>
        </Helmet>
      <Navbar />

      {children}
      <Footer />
    </>
  )
}
