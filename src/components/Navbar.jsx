import React from "react";
import logo from "../assets/header_logo.svg";
import "./Navbar.css";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
     
     <div className= "logo">
    <img src={logo} alt="terralogiclogo.svg" />
     </div>
          
      
        <ul>
          <li>Our Programs</li>
          <li>Blogs</li>
          <li>About us</li>
        </ul>

        <button>
          Register Now <ArrowUpRight />
        </button>
      </div>
    </>
  );
};

export default Navbar;