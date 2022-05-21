import React from 'react';
import Navbar from './Navbar';
import PopularArtical from './Popular';
import Search from './Search';
import Category from './Category';
import Tag from './Tag';
import FacebookFollow from './FaceBookFollow';
import HomeArticals from './HomeArticals';

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="flex flex-row max-w-7xl px-5 py-2 mx-auto">
        <div className="basis-3/4">
          <HomeArticals />
        </div>
        <div className="basis-1/4">
          <Search />
          <Category />
          <Tag />
          <PopularArtical />
          <FacebookFollow />
        </div>
      </div>
    </div>
  );
};

export default Home;
