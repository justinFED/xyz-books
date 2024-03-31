import herosectionImage from "../../assets/hero-illustration.svg";

function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left  w-1/2">
          <h2
            className="text-[5rem] font-bold mb-2 text-[#151b57] leading-none tracking-wider "
            style={{ width: "fit-content" }}
          >
            The Cheapest <br /> Textbooks
          </h2>
          <p className="py-[1rem] text-[2rem] text-[#5e61ef] tracking-wider font-semibold">
            Save Up To 90% On Millions <br />
            Of Titles
          </p>
          <p className="mt-4 w-3/5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <button className="bg-[#6060f4] hover:bg-blue-700 text-white px-9 py-3 rounded-lg mt-8 focus:outline-none">
            Get Started >
          </button>
        </div>

        <div className="flex items-center justify-center md:w-1/2">
          <img
            src={herosectionImage}
            alt="Textbooks"
            className="object-cover mt-4 md:mt-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
