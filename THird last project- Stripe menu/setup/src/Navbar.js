import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubMenu } = useGlobalContext();

const displayMenu =(e)=>{
  const page = e.target.textContent;
    const tempbtn = e.target.getBoundingClientRect();
  const center= (tempbtn.left + tempbtn.right )/2
  const bottom = tempbtn.bottom-3;

  openSubmenu(page , {center , bottom})
}

const handleSubmenu=(e)=>{
if(!e.target.classList.contains('link-btn')){
  closeSubMenu();
};
}

  return (
    <nav className='nav' onMouseOut={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="My-logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'onMouseOver={displayMenu}> Products</button>
            </li>
            <li>
              <button className='link-btn'onMouseOver={displayMenu}>Developers </button>
            </li>
            <li>
              <button className="link-btn"onMouseOver={displayMenu}>Contacts</button>
            </li>


        </ul>
        <button className="btn signin-btn">Sign In </button>
      </div>
    </nav>
  );
};

export default Navbar;
