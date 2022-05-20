import React from 'react';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';

const PopularItems = () => {
  return (
    <div className="flex mt-2">
      <div className="basis-1/6">
        <Link to="/" className="">
          <img
            className="image h-4/4 pt-2 "
            src={faker.image.avatar()}
            alt=""
          />
        </Link>
      </div>
      <div className="basis-4/6 pl-3 pr-1">
        <div className="title-time">
          <Link to="/" className="text-sm">
            {faker.name.firstName()}
          </Link>
          <br />
          <span className="text-xs"> 2nd Jun 2022</span>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
