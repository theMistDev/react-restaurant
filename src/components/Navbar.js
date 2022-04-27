import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar py-4 shadow-md sticky top-0 w-full px-3 ">
      <p className="bizName text-3xl">
        <span>Cool-Bite</span> Foods
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
