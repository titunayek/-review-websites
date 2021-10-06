import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const activeStyle ={
        
            fontWeight: "bold",
            color: "red"
          
    }
    return (
      <div className='header'>
      <nav >
      <NavLink className='link'  activeStyle={activeStyle} to="/home">Home</NavLink>
      <NavLink className='link'  activeStyle={activeStyle} to="/friends">All-Course </NavLink>
      <NavLink className='link'  activeStyle={activeStyle} to="/about">About</NavLink>
      
    </nav>
      
      </div>
    );
};

export default Header;