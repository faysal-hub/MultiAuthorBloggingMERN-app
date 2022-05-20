import React from 'react';

const Search = () => {
  return (
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
  );
};

export default Search;
