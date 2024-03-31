import Logo from "../../assets/sample-logo.svg";
import Path from "../../assets/Path.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Twitter from "../../assets/Twitter.svg";
import ArrowBottom from "../../assets/Bottomarrow.svg";

function Footer() {
  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="mx-20  justify-between flex flex-row">
        {/* Logo */}
        <div className=" flex flex-col   space-y-14">
          <img src={Logo} alt="Logo" className="w-[150px]" />
          <p>
            Lorem ipsum dolor sit amet, consetetur <br />
            sadipscing elitr, sed diam nonumy <br />
            eirmod
          </p>
          <div className="relative">
            <input
              className="appearance-none bg-transparent border border-[#6060f4] rounded-3xl w-64 py-3 pl-4 pr-10 text-gray-700 text-sm leading-tight focus:outline-none z-10"
              type="text"
              placeholder="Email Address"
            />
            <div className="absolute inset-y-0 right-14 flex items-center pr-3">
              <img
                src={ArrowBottom}
                alt="Icon"
                className="w-4 h-4 transform -rotate-90"
              />
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className=" flex flex-col  py-4  leading-9">
          <h1 className="font-bold text-2xl">Menu</h1>
          <ul className="mt-4">
            <li>Shop All</li>
            <li>About Us</li>
            <li>Community</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Support */}
        <div className=" flex flex-col  py-4  leading-9">
          <h1 className="font-bold text-2xl">Support</h1>
          <ul className="mt-4">
            <li>Shipping & Returns</li>
            <li>Help & FAQ</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Resources */}
        <div className=" flex flex-col  py-4  leading-9">
          <h1 className="font-bold text-2xl">Menu</h1>
          <ul className="mt-4">
            <li>Shipping & Returns</li>
            <li>Help & FAQ</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="flex flex-col py-4 ">
          <div className="bg-[#5dd1fa] relative rounded-full p-5 left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2">
            <img src={Path} alt="PathImage" className="w-9 h-9 " />
          </div>
        </div>
      </div>

      <div className=" mx-20 mt-8 flex justify-between items-center">
        <p>© 2022 Brainly.</p>

        <div className="flex">
          <div className="bg-[#f2f1ff] rounded-full p-4 mr-2">
            <img src={Facebook} alt="Facebook Logo" className="w-5 h-5 " />
          </div>
          <div className="bg-[#f2f1ff] rounded-full p-4 mr-2">
            <img src={Linkedin} alt="LinkedIn Logo" className="w-5 h-5 " />
          </div>
          <div className="bg-[#f2f1ff] rounded-full p-4">
            <img src={Twitter} alt="Twitter Logo" className="w-5 h-5 " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
