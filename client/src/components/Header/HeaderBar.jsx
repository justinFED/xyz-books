import React from "react";
import Header from "./Header";

function HeaderBar() {
  return (
    <div>
      <Header />

      <div className="flex flex-col min-h-screen ">
        <nav className="px-4 py-2 flex justify-evenly items-center">
          <h1 className="text-2xl font-bold">XYZ</h1>

          <div className="flex flex-row items-center border p-2 text-slate-500  rounded-3xl gap-2 border-indigo-500">
            <svg
              className="h-5 w-5 fill-current "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <input
              className="appearance-none bg-transparent border-none w-52 text-gray-700 text-sm mr-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

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
            <button className="bg-indigo-500 p-3 text-white rounded-lg w-32">
              Contact
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderBar;
