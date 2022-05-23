import React from 'react';
import { Link } from 'react-router-dom';

const Artical = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-2">
      <figure>
        <img
          src="https://api.lorem.space/image/album?w=200&h=200"
          alt="Album"
        />
      </figure>
      <div className="absolute bottom-0 left-0 bg-orange-400 text-white">
        <p className="p-1">MyTag Name</p>
      </div>
      <div className="card-body pt-2 pb-3 px-4 gap-0.5">
        <h2 className="card-title">
          <Link to="/artical/details/ovi">New album is released!</Link>
        </h2>
        <div className="flex flex-row gap-1 text-xs ">
          <span className="font-medium">
            <Link to="/"> Faysal Ovi</Link>
          </span>
          <span>2nd jan 2022</span>
        </div>

        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-start">
          <button className="btn btn-sm btn-secondary">
            <Link to="/artical/details/ovi"> READ MORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artical;
