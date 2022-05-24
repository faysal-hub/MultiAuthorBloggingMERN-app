import React from 'react';
import SocialIcons from './FooterIcons';
import FooterItemsContainer from './FooterItemsContainer';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <FooterItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-5"
      >
        <span>Terms · Privacy Policy</span>
        <span>© 2022 Appy. All rights reserved.</span>
        <SocialIcons />
      </div>
      <div className=" px-2 pb-2">
        <span>
          CREATED BY <b className="text-cyan-500">FAYSAL IBN MIZAN</b>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
