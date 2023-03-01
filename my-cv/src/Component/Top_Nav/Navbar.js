import React, { useState } from "react"
import "./Navbar.css"
import logo from "../Photos/AB.webp"
import resume from "../Resume/Document1.docx"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
        <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='navlink'>
            <ul className="link f_flex uppercase">
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <a href={resume} download="Resume">
                <button className='download-btn'>Download CV</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
