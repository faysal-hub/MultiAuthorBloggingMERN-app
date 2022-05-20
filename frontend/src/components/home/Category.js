import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Category = () => {
  return (
    <div className="category rounded-md bg-gray-100 my-2 px-1 py-2">
      <div className="title text-center py-1 -mx-1 -my-1.5 bg-yellow-300 border-0">
        <h3 className="">Category</h3>
      </div>
      <ul className="cate-list pt-3">
        <div className="cate-item flex justify-between py-0.5">
          <li className="flex flex-nowrap items-center">
            <FaChevronRight />
            <Link
              className="text-base cursor-pointer hover:text-slate-400"
              to="/"
            >
              Algorithom
            </Link>
          </li>
          <span>(5)</span>
        </div>
        <div className="cate-item flex justify-between py-0.5">
          <li className="flex flex-nowrap items-center">
            <FaChevronRight />
            <Link
              className="text-base cursor-pointer hover:text-slate-400"
              to="/"
            >
              Algorithom
            </Link>
          </li>
          <span>(5)</span>
        </div>
        <div className="cate-item flex justify-between py-0.5">
          <li className="flex flex-nowrap items-center">
            <FaChevronRight />
            <Link
              className="text-base cursor-pointer hover:text-slate-400"
              to="/"
            >
              Algorithom
            </Link>
          </li>
          <span>(5)</span>
        </div>
      </ul>
    </div>
  );
};

export default Category;
