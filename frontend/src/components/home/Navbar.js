import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link className="image" to="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/01.png"
            alt="logo"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <Link to="/about">
            <h3 className="cursor-pointer">About</h3>
          </Link>
          <Link to="/contact">
            <h3 className="cursor-pointer">Contact</h3>
          </Link>
          <Link to="/follow">
            <h3 className="text-white bg-green-600 px-4 py-1 rounded-full hover:bg-green-700 cursor-pointer">
              Follow
            </h3>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <Link to="/signIn">
          <h3 className="cursor-pointer"> Sign In</h3>
        </Link>
        <Link to="/signUp">
          <h3 className="border px-4 py-1 rounded-full border-green-600 hover:bg-green-700 hover:text-white cursor-pointer">
            Get Started
          </h3>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
