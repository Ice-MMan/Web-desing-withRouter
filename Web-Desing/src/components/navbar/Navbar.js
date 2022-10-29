import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1 onClick={() => navigate("/")}>
            <span className="highlight">Anka Team </span> Web Design
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
