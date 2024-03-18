import React from 'react';
import './Style.css';
import mlogo from './Images/mlogo.png';
import cart from './Images/cart.png';
import heart from './Images/heart.png';
import search from './Images/search.png';
import account from './Images/account.png';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <>
      <header class="navbar">
        <img src={mlogo} alt="mlogo" id="mlogo"></img>
        <h1 id="head">My furniture</h1>
        <nav>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="">Contact</Link></li>
          </ul>
        </nav> 
        <img src={account} alt="account" class="icon"></img>
        <img src={search} alt="search" class="icon"></img>
        <img src={heart} alt="heart" class="icon"></img>
        <img src={cart} alt="cart" class="icon"></img>  
      </header>
    </>
  )
}

export default Main
