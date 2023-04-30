import {React,useState} from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from "react-icons/gi"
export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu =()=>{
   setShowMenu(!showMenu);
  }

  return (
    <nav className='main-nav'>
      <div className="logo">
        <h2><span>L</span>OGO</h2>
        <h2><span>H</span>ere</h2>
      </div>
      <div className= {showMenu ? "topnav mobile-topnav":"topnav"}>
        <ul>
          <li><a href="#1">About</a></li>
          <li><a href="#2">Menu</a></li>
          <li><a href="#3">News</a></li>
          <li><a href="#4">Social</a></li> 
        </ul>
      </div>
      <div className="signin">
        Signin
      </div>
      <div className='hamburger-menu'>
        <a href="#e" onClick={toggleMenu}><GiHamburgerMenu/></a>
      </div>
    </nav>
  )
}
