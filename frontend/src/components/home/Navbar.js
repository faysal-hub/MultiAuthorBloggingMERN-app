import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';

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

      <div className="hidden md:flex items-center space-x-5">
        <Link to="/signIn">
          <h3 className="cursor-pointer text-green-600 hover:text-green-500 hover:text-lg">
            Sign In
          </h3>
        </Link>
        <Link to="/signUp">
          <h3 className="border px-4 py-1 rounded-full border-green-600 hover:bg-green-700 hover:text-white cursor-pointer">
            Get Started
          </h3>
        </Link>
      </div>
      {/* dropdown Manu */}
      <Menu as="div" className="md:hidden dropdown dropdown-end">
        <Menu.Button className="mt-1.5 inline-flex items-center justify-center border h-10 w-10 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Menu.Button>
        <Menu.Items>
          <ul
            tabIndex="0"
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-1"
          >
            <Menu.Item as="div">
              {({ active }) => (
                <li>
                  <a
                    href="/signIn"
                    className={`text-sm ${
                      active ? 'bg-green-600 text-white' : 'text-green-600'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    Login
                  </a>
                </li>
              )}
            </Menu.Item>
            <Menu.Item as="div">
              {({ active }) => (
                <li>
                  <a
                    href="/signUp"
                    className={`text-sm ${
                      active ? 'bg-green-600 text-white' : 'text-green-600'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    Registration
                  </a>
                </li>
              )}
            </Menu.Item>
          </ul>
        </Menu.Items>
      </Menu>
    </header>
  );
};

export default Navbar;
