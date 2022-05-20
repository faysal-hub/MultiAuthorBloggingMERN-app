import React from 'react';
import { Link } from 'react-router-dom';

import { FaChevronRight } from 'react-icons/fa';

import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="flex flex-row max-w-7xl px-5 py-2 mx-auto">
        <div className="basis-3/4">
          <h3>Hello World!</h3>
        </div>

        <div className="basis-1/4">
          <div className="search-category-tag">
            <div className="search rounded-md bg-gray-100 px-1 py-2">
              <h2 className="text-center pb-2">Search</h2>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full max-w-x mb-1"
                />
                <button className="btn btn-block btn-sm bg-green-600 border-0 hover:bg-green-700">
                  SEARCH
                </button>
              </div>
            </div>

            <div className="category rounded-md bg-gray-100 my-2 px-1 py-2">
              <div className="title text-center py-1 -mx-1 -my-1.5 bg-yellow-300 border-0">
                <h3 className="">Category</h3>
              </div>
              <ul className="cate-list pt-3">
                <div className="cate-item flex justify-between cursor-pointer py-0.5">
                  <li className="flex flex-nowrap items-center">
                    <FaChevronRight />
                    <Link className="text-base hover:text-slate-400" to="/">
                      Algorithom
                    </Link>
                  </li>
                  <span>(5)</span>
                </div>
                <div className="cate-item flex justify-between cursor-pointer py-0.5">
                  <li className="flex flex-nowrap items-center">
                    <FaChevronRight />
                    <Link className="text-base hover:text-slate-400" to="/">
                      Algorithom
                    </Link>
                  </li>
                  <span>(5)</span>
                </div>
                <div className="cate-item flex justify-between cursor-pointer py-0.5">
                  <li className="flex flex-nowrap items-center">
                    <FaChevronRight />
                    <Link className="text-base hover:text-slate-400" to="/">
                      Algorithom
                    </Link>
                  </li>
                  <span>(5)</span>
                </div>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
