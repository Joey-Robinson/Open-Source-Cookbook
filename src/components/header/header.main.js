import React from "react"
import Navigation from "./header.nav"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <hgroup>
      <h1>Open-Source Cookbook</h1>
      <h4>Share recipes via coding.</h4>
    </hgroup>
    <Link to="/">Go Home</Link>
    <Navigation />
  </header>
)

export default Header
