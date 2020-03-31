import React from "react"
import Navigation from "./header.nav"
import useDarkMode from "use-dark-mode"

const Header = () => {
  const darkMode = useDarkMode(false)

  return (
    <header className="header">
      <div id="dark" className="header--dark">
        <button type="button" onClick={darkMode.disable}>
          Light Mode
        </button>
        <button type="button" onClick={darkMode.enable}>
          Dark Mode
        </button>
      </div>

      <hgroup className="header--group">
        <h1>Open-Source Cookbook</h1>
        <h4>Share recipes. Learn git.</h4>
      </hgroup>
      <br />
      <Navigation />
    </header>
  )
}
export default Header
