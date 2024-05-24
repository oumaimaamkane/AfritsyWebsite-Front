import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import Logo from '../../assets/LOGO.png';
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo-image" />
          </div>
        </NavLink>
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                HOME
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/about" className="nav__link" onClick={closeMenuOnMobile}>
                ABOUT
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/project" className="nav__link" onClick={closeMenuOnMobile}>
                PROJECTS
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link" onClick={closeMenuOnMobile}>
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
