import React from 'react';

const FacebookFollow = () => {
  return (
    <div className="facebookFollow rounded-md bg-gray-100 mt-2">
      <div className="title text-center mt-2 py-1 bg-green-600 border-0">
        <h3 className="">FOLLOWING ME</h3>
      </div>
      <div className="image flex items-center pt-0.5">
        <iframe
          className=""
          title="myFrame"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFull-stack-Development-104181395202750%2F&tabs=timeline&width=305&height=135&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=679713503103682"
          style={{
            width: '305px',
            height: '135px',
            border: 'none',
            overflow: 'hidden',
            scrolling: 'no',
            frameBorder: '0',
            allowfullscreen: 'true',
            allow:
              'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share',
          }}
        ></iframe>
      </div>
    </div>
  );
};
export default FacebookFollow;
