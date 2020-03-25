import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <ul
      style={{
        listStyle: "none",
        fontSize: "2.2rem",
      }}
    >
      <li>
        <Link to="/">Go Home</Link>
      </li>
      <li>
        <Link to="/recipes/">Go To Recipes</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
