import React from "react"

import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"

export default function Layout({ children, pageContext }) {
  if (pageContext.layout === "blogPost") {
    return (
      <>
        {" "}
        <Navbar /> {children}{" "}
      </>
    )
  }
  return (
    <>
      <Navbar />

      {children}
      <Footer />
    </>
  )
}
