import React from "react";

import logo from "../../assets/Images/icon/logo.png";
import cart from "../../assets/Images/icon/cart.png";
import search from "../../assets/Images/icon/search-icon.png";
function HeaderSection() {
  return (
    <nav id="nav-1" className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container">
        <img id="app" className="ms-5" src={logo} width="16px" alt="" />
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
              <a className="nav-link" href="#">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                mac
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ipad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                iphone
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                watch
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                AirPods
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tv&Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Entartainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div id="cart">
            <a className="nav-link" href="">
              <img src={cart} width="16px" alt="" />
            </a>
          </div>
          <div className="d-flex">
            <a className="nav-link" href="">
              <img src={search} width="16px" alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderSection;
