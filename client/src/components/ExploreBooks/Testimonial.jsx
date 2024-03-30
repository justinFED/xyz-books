import Binance from "../../assets/Binance1.svg";
import User from "../../assets/user.png";
import Star from "../../assets/star.svg";

function Testimonial() {
  return (
    <section className="   w-full  py-8 md:py-16 ">
      <div className="   container my-14 px-14 mx-auto flex flex-col items-center justify-center md:flex md:justify-center">
        <div className="  flex flex-col items-center justify-center ">
          <h1 className="text-3xl font-bold">Andrew Santellan</h1>
          <p className="text-lg text-[#63cef5]">Product Manager, Binance</p>
          <div className="flex items-center space-x-2 mt-7 text-gray-500">
            <img src={Binance} alt="Image 1" className="w-[30px] h-auto" />
            <p className="text-2xl">Binance</p>
          </div>
        </div>

        <div className="bg-[#4099f5] w-9/12 text-white  mt-24 container mx-auto p-16 rounded-lg shadow-lg">
          <div className="flex items-center justify-center relative ">
            <img
              src={User}
              alt="Image 1"
              className="w-[110px] h-auto object-cover absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="text-2xl leading-relaxed mt-8 text-center items-center flex flex-col space-y-14">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
              <br />
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam{" "}
              <br />
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores <br />
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
              est <br />
              Lorem ipsum dolor sit amet.
            </p>
            <img src={Star} alt="Image 1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
