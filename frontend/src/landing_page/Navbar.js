import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/image/logo.svg" alt="TradingApp logo" width="200" height="30" className="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item me-5">
              <Link className="nav-link active" aria-current="page" to="/signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-5" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
 