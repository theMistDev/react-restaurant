import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar py-4 shadow-md sticky top-0 w-full  ">
      <p className="bizName">
        <span>SideHustle</span> Foods
      </p>

      <ul text-2xl>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>

        <li>
          <Link className="link" to="/products">
            Products
          </Link>
        </li>

        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
