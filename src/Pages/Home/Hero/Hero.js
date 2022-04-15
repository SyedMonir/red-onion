import React from 'react';
import background from '../../../Images/bannerbackground.png';

const Hero = () => {
  return (
    <section
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content flex-col max-w-[100rem] text-center text-neutral-content">
        <h1 className="text-6xl font-bold text-black font-mono ">
          EAT DRINK VISIT
          {/* <span>EAT</span>
              <span>DRINK</span>
              <span>VISIT</span> */}
        </h1>

        <div className="form-control w-5/6 items-center">
          <div className="input-group w-5/6">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-5/6"
            />
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
