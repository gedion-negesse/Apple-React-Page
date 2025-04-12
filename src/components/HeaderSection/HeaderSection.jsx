import React from "react";

import logo from "../../assets/Images/icon/logo.png";
import cart from "../../assets/Images/icon/cart.png";
import search from "../../assets/Images/icon/search-icon.png";
import { Link } from "react-router-dom";
function HeaderSection() {
  return (
    <nav id="nav-1" className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/">
          <img id="app" className="ms-5" src={logo} width="16px" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span> ☰</span>
        </button>

        <div
          className="me-5 navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-justified w-100 nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/store">
                Store
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mac">
                mac
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ipad">
                ipad
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/iphone">
                iphone
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watch">
                watch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/airpod">
                AirPods
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tv&home">
                Tv&Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entartainment">
                Entartainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Accessories">
                Accessories
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div id="cart">
            <Link className="nav-link" to="/cart">
              <img src={cart} width="16px" alt="" />
            </Link>
          </div>
          <div className="d-flex">
            <Link className="nav-link" to="/search">
              <img src={search} width="16px" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderSection;
