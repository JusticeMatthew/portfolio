import React from 'react';
import Social from './Social';

const Home = () => {
  return (
    <>
      <div className='tokyo_tm_home'>
        <div className='home_content'>
          <div className='avatar'>
            <div
              className='image avatar_img'
              style={{
                backgroundImage: 'url(assets/img/slider/1.jpg)',
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className='details'>
            <h3 className='name'>Matthew Justice</h3>
            <p className='job'>
              I am a US based full-stack developer driven by learning and
              understanding
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
