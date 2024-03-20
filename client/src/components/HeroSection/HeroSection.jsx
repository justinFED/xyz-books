import React from 'react';
import herosectionImage from "../../assets/herosection.png";


function HeroSection() {
  return (
    <section className=" py-8">
      <div className="container h-[70vh] mx-auto flex flex-col md:flex-row items-center  px-4 ">

        <div className="text-center md:text-left  w-1/2">
        <h2 className="text-[5rem] font-bold mb-2 text-[#151b57] leading-none  " style={{ width: 'fit-content' }}>The Cheapest <br /> Textbooks</h2>
          <p className="py-[1rem] text-[2rem] text-[#5e61ef] tracking-wider font-semibold">Save Up To 90% On Millions <br />Of Titles</p>
          <p className="mt-4 w-3/5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          <button className="bg-[#6060f4] hover:bg-blue-700 text-white px-9 py-3 rounded mt-4 focus:outline-none">Get Started ></button>
        </div>

        <div className='flex items-center justify-center md:w-1/2'>
          <img src={herosectionImage} alt="Textbooks" className="object-cover mt-4 md:mt-0 w-full h-full" style={{ maxWidth: '650px', maxHeight: '650px' }} />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
