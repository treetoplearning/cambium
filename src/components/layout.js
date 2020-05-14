import React from "react"

import Footer from "./footer.js"
import Navbar from "./navbar.js"

export default function Layout({ children }) {
  return (
    <div style={{ }}>
    <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}