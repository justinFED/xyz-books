import Logo from "../../assets/sample-logo.svg";
import Path from "../../assets/Path.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Twitter from "../../assets/Twitter.svg";

function Footer() {
  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="mx-16  justify-between flex ">
        {/* Logo */}
        <div className=" flex flex-col   space-y-14">
          <img src={Logo} alt="Logo" className="w-[150px]" />
          <p>
            Lorem ipsum dolor sit amet, consetetur <br />
            sadipscing elitr, sed diam nonumy <br />
            eirmod
          </p>
          <input
            className="appearance-none bg-transparent border border-[#6060f4] rounded-3xl w-64 py-2  pl-4 text-gray-700 text-sm leading-tight focus:outline-none z-10"
            type="text"
            placeholder="Email Address"
          />
          <p>© 2022 Brainly.</p>
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
          <div className="bg-blue-500 rounded-full p-6 ">
            <img src={Path} alt="PathImage" className="w-8 h-8 " />
          </div>

          <div className="flex">
            <div className="bg-blue-500 rounded-full p-4 mr-2">
              <img src={Facebook} alt="Facebook Logo" className="w-8 h-8 " />
            </div>
            <div className="bg-blue-500 rounded-full p-4 mr-2">
              <img src={Linkedin} alt="LinkedIn Logo" className="w-8 h-8 " />
            </div>
            <div className="bg-blue-500 rounded-full p-4">
              <img src={Twitter} alt="Twitter Logo" className="w-8 h-8 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
