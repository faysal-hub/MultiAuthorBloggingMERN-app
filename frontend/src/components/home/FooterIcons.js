import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      <span
        className="px-2 py-1 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
      >
        <a
          href="https://www.facebook.com/faysalovi13/"
          className="facebookSocial"
        >
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </a>
      </span>
      <span
        className="px-2 py-1 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
        <a href="https://github.com/faysal-hub/" className="githubSocial">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </span>
      <span
        className="px-2 py-1 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
        <a
          href="https://www.linkedin.com/in/faysal13/"
          className="linkdinSocial"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </span>
      <span
        className="px-2 py-1 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
        <a href="/" className="twitterSocial">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
      </span>
      <span
        className="px-2 py-1 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
      >
        <a href="/" className="instagramSocial">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
      </span>
    </div>
  );
};

export default SocialIcons;
