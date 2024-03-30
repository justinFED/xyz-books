import { useState } from "react";

const FAQ = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);
  };

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen1(false);
  };

  return (
    <section className="bg-[#f1f5f8] w-full py-8 md:py-16">
      <div className="container px-44 mx-auto flex flex-col justify-center md:flex md:justify-center">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <div className="flex flex-col justify-center w-full mt-8">
          <div className="border-b border-gray-300 py-4">
            <button
              className="flex justify-between items-center w-full py-2 text-lg font-semibold text-[#6060f4] bg-transparent focus:outline-none"
              onClick={toggleAccordion1}
            >
              Dedicated customer support and help portal.
              <svg
                className={`w-6 h-6 transition-transform duration-300 transform ${
                  isOpen1 ? "rotate-180" : ""
                }`}
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
            {isOpen1 && (
              <p className="py-2">
                With our dedicated customer support team, you can rest easy
                knowing that we're doing everything we can to save you time,
                money, and stress.
              </p>
            )}
          </div>
          <div className="border-b border-gray-300 py-4">
            <button
              className="flex justify-between items-center w-full py-2 text-lg font-semibold text-[#6060f4] bg-transparent focus:outline-none"
              onClick={toggleAccordion2}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              <svg
                className={`w-6 h-6 transition-transform duration-300 transform ${
                  isOpen2 ? "rotate-180" : ""
                }`}
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
            {isOpen2 && (
              <p className="py-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            )}
          </div>
          <div className="border-b border-gray-300 py-4">
            <button
              className="flex justify-between items-center w-full py-2 text-lg font-semibold text-[#6060f4] bg-transparent focus:outline-none"
              onClick={toggleAccordion3}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              <svg
                className={`w-6 h-6 transition-transform duration-300 transform ${
                  isOpen3 ? "rotate-180" : ""
                }`}
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
            {isOpen3 && (
              <p className="py-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              </p>
            )}
          </div>
          <div className="border-b border-gray-300 py-4">
            <button
              className="flex justify-between items-center w-full py-2 text-lg font-semibold text-[#6060f4] bg-transparent focus:outline-none"
              onClick={toggleAccordion4}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              <svg
                className={`w-6 h-6 transition-transform duration-300 transform ${
                  isOpen4 ? "rotate-180" : ""
                }`}
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
            {isOpen4 && (
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
