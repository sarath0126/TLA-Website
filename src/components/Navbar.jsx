import React, { useState } from "react";
import logo from "../assets/header_logo.svg";
import "./Navbar.css";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Burger button */}
      <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>Our Programs</li>
        <li>Blogs</li>
        <li>About Us</li>
        <li onClick={() => setIsOpen(false)}>Home</li>
        <button>
          Register Now <ArrowUpRight />
        </button>
        
      </ul>
    </nav>
  );
};

export default Navbar;
