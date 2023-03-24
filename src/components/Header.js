import { useState } from "react";
import {Link } from "react-router-dom";


const Title = () => {
  return (
    <a href="./" className="logo">
      <img src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" alt="image" />
    </a>
  )
}
 
const Header =() => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {loggedIn?<button onClick= {() => setLoggedIn(false)}>Log In</button>:<button onClick={() => setLoggedIn(true)}>Log out</button>}
    </div>
 )
}

export default Header;