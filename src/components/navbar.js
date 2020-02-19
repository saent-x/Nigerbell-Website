import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/global.scss"

export default () => {
  const [navbarBurgerActive, setNavbarBurgerActive] = useState(false)

  return (
    <React.Fragment>
      <nav
        className="navbar is-fixed-top is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://nigerbellltd.netlify.com">
            <img
              src={require("../assets/icons/logo.png")}
              width="30"
              height="40"
            />
            <p style={{ marginLeft: "10px" }}>Nigerbell Hearing</p>
          </a>

          <a
            role="button"
            className={`navbar-burger burger ${navbarBurgerActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic"
            onClick={() => setNavbarBurgerActive(!navbarBurgerActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasic" className={`navbar-menu ${navbarBurgerActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link
              className="navbar-item"
              to="/"
              activeStyle={{ color: "gray" }}
            >
              Home
            </Link>

            <Link
              className="navbar-item"
              to="/products"
              activeStyle={{ color: "gray" }}
            >
              Products
            </Link>
            <Link
              className="navbar-item"
              to="/blog"
              activeStyle={{ color: "gray" }}
            >
              Blog
            </Link>
            <Link
              className="navbar-item"
              to="/about"
              activeStyle={{ color: "gray" }}
            >
              About
            </Link>
            <Link
              className="navbar-item"
              to="/contact"
              activeStyle={{ color: "gray" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}
