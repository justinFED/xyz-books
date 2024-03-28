import Header from "./Header";
import SearchBook from "../SearchBook/SearchBook";
import Logo from "../../assets/sample-logo.svg";
import Icon from "../../assets/Icon-feather-globe.svg";
import Arrow from "../../assets/XMLID_2331_.svg";

function HeaderBar({ onSearch }) {
  return (
    <div>
      <Header />
      <div>
        <nav className=" px-4  flex justify-evenly items-center">
          <img src={Logo} alt="Logo" />
          <SearchBook onSearch={onSearch} />
          <ul className="flex space-x-16 ">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Rent Textbooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Buy Textbooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Sell Textbooks
              </a>
            </li>
          </ul>
          <div className="flex flex-row items-center gap-5 ">
            <a href="#" className="hover:underline flex gap-2">
              <img src={Icon} alt="Icon" />
              En
            </a>
            <button className="bg-[#6060f4] p-3 text-white rounded-lg w-32 font-semibold ">
              Contact
            </button>
          </div>
        </nav>
        <div className="container  px-4 mx-auto flex justify-end items-end gap-4 ">
          <p className="font-[caveat] text-[#5ed0f9] origin-bottom -rotate-12 text-lg">
            Inquire us now to <br /> avail discounts!
          </p>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
