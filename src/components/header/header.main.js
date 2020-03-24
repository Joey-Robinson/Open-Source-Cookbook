import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div>
      <hgroup>
        <h1>Open-Source Cookbook</h1>
        <h4>Share recipes via coding.</h4>
      </hgroup>
      <br />
      <span>
        <Link to="/">Go Home</Link>
      </span>
    </div>
  </header>
)

export default Header
