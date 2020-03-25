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
      <li>
        <Link to="/howto/">Go to Howto</Link>
      </li>
      <li>
        <Link to="/about/">Go to About</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
