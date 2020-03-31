import React from "react"
import Header from "./header/header.main"

// prettier-ignore
const Layout = ({children}) => (
  // prettier-ignore
  <>
    <main className="primary">
      <Header />
      {children}
    </main>
  </>
)

export default Layout
