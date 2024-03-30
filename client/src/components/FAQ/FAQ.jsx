import { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className=" bg-[#f1f5f8]  w-full  py-8 md:py-16 ">
      <div className="  container px-44 mx-auto flex flex-col justify-center md:flex md:justify-center">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <div className="flex flex-col  justify-center  w-full mt-8 ">
          <div className="border-b border-gray-300 py-4  ">
            <button
              className="flex justify-between items-center w-full  py-2 text-lg font-semibold text-[#6060f4] bg-transparent  focus:outline-none"
              onClick={toggleAccordion}
            >
              Dedicated customer support and help portal.
              <svg
                className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <p className="py-2 ">
                With our dedicated customer support team, you can rest easy
                knowing that we're doing everything we can to save you time,
                money, and stress.
              </p>
            )}
          </div>
          <div className="border-b border-gray-300 py-4">
            <button
              className="flex justify-between items-center w-full  py-2 text-lg font-semibold text-[#6060f4] bg-transparent focus:outline-none"
              onClick={toggleAccordion}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              <svg
                className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <p className="py-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            )}
          </div>
          <div className="border-b border-gray-300 py-4">
            <button
              className="flex justify-between items-center w-full  py-2 text-lg font-semibold text-[#6060f4] bg-transparent focus:outline-none"
              onClick={toggleAccordion}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              <svg
                className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <p className="py-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            )}
          </div>

          <div className="border-b border-gray-300 py-4">
            <button
              className="flex justify-between items-center w-full  py-2 text-lg font-semibold text-[#6060f4] bg-transparent focus:outline-none"
              onClick={toggleAccordion}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              <svg
                className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <p className="py-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
