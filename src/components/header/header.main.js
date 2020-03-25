import React from "react"
import Navigation from "./header.nav"

const Header = () => (
  <header className="header">
    <hgroup className="header--group">
      <h1>Open-Source Cookbook</h1>
      <h4>Share recipes. Learn git.</h4>
    </hgroup>
    <br />
    <Navigation />
  </header>
)

export default Header
