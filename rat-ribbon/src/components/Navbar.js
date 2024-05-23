import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <a href="/">
    <img src="image.jpg" alt="Logo" style={{width:"10rem",
      Color:'black'
    }} />
  </a>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/admin">Admin</NavLink>



    </nav>
  );
};

export default Navbar
