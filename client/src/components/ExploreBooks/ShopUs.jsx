import PackageBox from "../../assets/package-box.svg";
import Help from "../../assets/help.svg";
import PiggyBank from "../../assets/piggy-bank.svg";

function ShopUs() {
  return (
    <section className=" bg-[#051a37]  w-full  py-8 md:py-16 text-white">
      <div className="  container my-14 px-14 mx-auto flex flex-col justify-center md:flex md:justify-center">
        <div className=" space-y-4">
          <p className="text-xs text-yellow-400">LOREM IPSUM</p>
          <h1 className="text-3xl font-bold">3 Reasons To Shop With Us</h1>
        </div>

        <div className="flex flex-row space-x-24 mt-14 ">
          <div className=" space-y-5">
            <img src={PackageBox} alt="Image 1" className="w-[50px] h-auto " />
            <h2 className="font-extrabold">
              All textbook rentails come <br /> with free return shipping.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur <br />
              sadipscing elitr, sed diam nonumy eirmod tempor <br />
              invidunt ut labore et dolore Stet clita kasd <br />
              gubergren, no sea takimata.
            </p>
          </div>

          <div className="space-y-5">
            <img src={Help} alt="Image 2" className="w-[50px] h-auto" />
            <h2 className="font-extrabold">
              Dedicated customer <br /> support and help portal.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur <br />
              sadipscing elitr, sed diam nonumy eirmod tempor <br />
              invidunt ut labore et dolore Stet clita kasd <br />
              gubergren, no sea takimata.
            </p>
          </div>

          <div className=" space-y-5">
            <img src={PiggyBank} alt="Image 3" className="w-[50px] h-auto" />
            <h2 className="font-extrabold">
              Buy or rent cheap textbooks <br /> & save up to $500 per year!
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur <br />
              sadipscing elitr, sed diam nonumy eirmod tempor <br />
              invidunt ut labore et dolore Stet clita kasd <br />
              gubergren, no sea takimata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopUs;
