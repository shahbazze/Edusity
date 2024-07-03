import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/edusity_assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/edusity_assets/menu-icon.png";
function Navbar() {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);
  const [mobilemenu,setmobilemenu]=useState(false);
  const togglemenu=()=>{
    mobilemenu ?setmobilemenu(false):setmobilemenu(true);
  }
  return (
    <nav className={`container ${sticky ? "dark-nav " : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobilemenu ? "":"hide-mobile-menu "}>
        <li>
          {" "}
          <Link to="Hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li><Link to="About" smooth={true} offset={-150} duration={500}>
          About us</Link>
        </li>
        <li>
          <Link to="Campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
       
        <li>
          <Link to="Testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} offset={-260} duration={500}>
          <button className="btn">Contact us</button> 
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className="menu-icon" alt="" onClick={togglemenu}/>
    </nav>
  );
}

export default Navbar;
