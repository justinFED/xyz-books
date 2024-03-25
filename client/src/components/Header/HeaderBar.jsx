import React from "react";
import Header from "./Header";
import SearchBook from "../SearchBook";

function HeaderBar({ onSearch }) {
  return (
    <div>
      <Header />

      <div className="flex flex-col">
        <nav className="px-4 py-2 flex justify-evenly items-center">
          <h1 className="text-2xl font-bold">XYZ</h1>

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
          <div className="flex flex-row items-center gap-5">
            <a href="#" className="hover:underline">
              En
            </a>
            <button className="bg-[#6060f4] p-3 text-white rounded-lg w-32">
              Contact
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderBar;
