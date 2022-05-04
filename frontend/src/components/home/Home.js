import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="flex flex-row max-w-7xl p-5 mx-auto">
        <div className="basis-3/4">
          <h3>Hello World!</h3>
        </div>
        <div className="basis-1/4">
          <h3> Part 2</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
