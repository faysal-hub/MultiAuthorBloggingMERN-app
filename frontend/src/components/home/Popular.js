import React from 'react';
import PopularItems from './PopularItems';

const PopularArtical = () => {
  return (
    <div className="popularArtical rounded-md bg-gray-100 my-2 px-1 py-2">
      <div className="title text-center py-1 -mx-1 -my-1.5 bg-yellow-300 border-0">
        <h3 className="">Popular Artical</h3>
      </div>
      <PopularItems />
      <PopularItems />
      <PopularItems />
      <PopularItems />
    </div>
  );
};

export default PopularArtical;
