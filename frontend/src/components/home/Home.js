import React from 'react';
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
                  class="input input-bordered input-sm w-full max-w-x mb-1"
                />
                <button class="btn btn-block btn-sm bg-green-600 border-0 hover:bg-green-700">
                  SEARCH
                </button>
              </div>
            </div>

            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
