import React from "react"
import Header from "./header/header.main"
import DarkModeToggle from "./dark"

// prettier-ignore
const Layout = ({children}) => (
  // prettier-ignore
  <>
    <main className="primary">
      <DarkModeToggle />
      <Header />
      {children}
    </main>
  </>
)

export default Layout
