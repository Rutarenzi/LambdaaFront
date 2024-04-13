import React,{useState} from 'react';
import Links from './constant'
import './Navbar.css';
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineTeam,AiOutlineLeft}from "react-icons/ai"

const NavBar = () => {
  const [active,setActive] = useState('Shop')
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">Euphoria</a>
        <div className="navbar-links">
          {Links.map((link,index)=>(
            <a href={link.url} key={index} onClick ={()=>{setActive(link.name)}} className={`navbar-link ${ (active == link.name) ? 'active':""}`}>{link.name}</a>
          ))}
          
        </div>
        <div className="navbar-search">
        {/* <button className="search-btn">Search</button> */}
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="navbar-icons">
          <a href="/" className="navbar-icon"><AiOutlineHeart/></a>
          <a href="/" className="navbar-icon"><AiOutlineTeam/></a>
          <a href="/" className="navbar-icon"><AiOutlineShoppingCart/></a>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar