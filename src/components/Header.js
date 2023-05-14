import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);
  const toggleNav = () => {
    setIsBurgerClicked(!isBurgerClicked);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/" className="brand">
                GreenPillow
              </Link>
            </div>
            <span onClick={toggleNav}>
              {/* <strong className="burger">X</strong> */}
              <FontAwesomeIcon icon={faBars} className="burgerIcon" />
            </span>
            <nav
              className={`nav nav-pills custom ${
                isBurgerClicked ? "openNav" : ""
              }`}
              onClick={toggleNav}
            >
              <span onClick={toggleNav}>
                <strong className="close">X</strong>
              </span>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " nav-link btn-danger active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " nav-link active" : "nav-link"
                }
                to="/product"
              >
                Product
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " nav-link active" : "nav-link"
                }
                to="/post"
              >
                Post
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
