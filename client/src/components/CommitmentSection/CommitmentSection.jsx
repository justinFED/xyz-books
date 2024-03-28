import React from "react";
import groupImage from "../../assets/Group-13597.png";
import Binance from "../../assets/Binance.svg";
import Bitcoin from "../../assets/Bitcoin.svg";
import Solana from "../../assets/Solana.svg";
import Ethereum from "../../assets/Ethereum.svg";
import Tether from "../../assets/Tether.svg";
import XRP from "../../assets/XRP.svg";

function CommitmentSection() {
  return (
    <section className="container mx-auto px-12 py-8 md:py-16 ">
      <div className="flex flex-col md:flex-row items-center gap-28 h-full">
        <div className="md:w-1/2 h-full">
          <img
            src={groupImage}
            alt="Image Description"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Commitment
          </h2>
          <p className="text-sm md:text-xl font-normal py-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            <br />
            sed diam nonumy eirmod tempor invidunt ut labore et
            <br />
            dolore magna aliquyam erat, sed diam voluptua. At
            <br />
            vero eos et accusam et justo duo dolores et ea rebum
            <br />
          </p>
          <button className="bg-[#151b55] text-[#66cdf8] hover:bg-blue-700  px-9 py-3 rounded mt-4 focus:outline-none">
            Learn More >
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center container mx-auto md:py-16">
        <h1 className="font-bold text-5xl text-white tracking-wide">
          Trusted By Awesome <span className="text-[#f4c647]">Clients</span>
        </h1>
        <div className="flex justify-evenly items-center w-full mt-12 font-bold text-white text-[1.4rem] tracking-widest">
          <div className="flex items-center">
            <img src={Binance} alt="Image 1" className=" mr-4" />
            <p>Binance</p>
          </div>

          <div className="flex items-center">
            <img src={Bitcoin} alt="Image 2" className=" mr-4" />
            <p>Bitcoin</p>
          </div>

          <div className="flex items-center">
            <img src={Solana} alt="Image 3" className=" mr-4" />
            <p>Solana</p>
          </div>

          <div className="flex items-center">
            <img src={Ethereum} alt="Image 4" className=" mr-4" />
            <p>Ethereum</p>
          </div>

          <div className="flex items-center">
            <img src={Tether} alt="Image 5" className=" mr-4" />
            <p>Tether</p>
          </div>

          <div className="flex items-center">
            <img src={XRP} alt="Image 6" className=" mr-4" />
            <p>XRP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommitmentSection;
