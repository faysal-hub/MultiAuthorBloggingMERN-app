import React from 'react';
import { Link } from 'react-router-dom';

const Tag = () => {
  return (
    <div className="tag rounded-md bg-gray-100 my-2 px-1 py-2">
      <div className="title text-center py-1 -mx-1 -my-1.5 bg-sky-400 border-0">
        <h3 className="">Tag</h3>
      </div>
      <ul className="tag-list pt-3 flex flex-wrap gap-1 text-sm">
        <li className="px-1 bg-green-700 rounded-sm hover:bg-orange-400">
          <Link className="text-white" to="/">
            Programming
          </Link>
        </li>
        <li className="px-1 bg-green-700 rounded-sm hover:bg-orange-400">
          <Link className="text-white" to="/">
            Programming
          </Link>
        </li>
        <li className="px-1 bg-green-700 rounded-sm hover:bg-orange-400">
          <Link className="text-white" to="/">
            Programming
          </Link>
        </li>
        <li className="px-1 bg-green-700 rounded-sm hover:bg-orange-400">
          <Link className="text-white" to="/">
            Programming
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tag;
