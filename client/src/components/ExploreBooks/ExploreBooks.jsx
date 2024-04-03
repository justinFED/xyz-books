import Book1 from "../../assets/Book1.png";
import Book2 from "../../assets/Book2.png";
import Book3 from "../../assets/Book3.png";
import Arrow from "../../assets/XMLID_2331_.svg";

function ExploreBooks() {
  return (
    <section className="w-full md:py-16 ">
      <div className="flex flex-col items-center justify-center md:flex md:justify-center">
        <div className="container text-center text-[#151c53] ">
          <h1 className="text-4xl font-bold mb-6">Explore Our Books</h1>
          <p>
            With our dedicated customer support team, you can rest easy knowing
            that we're doing everything
            <br />
            we can to save you time, money, and stress.
          </p>
        </div>

        <div className="  container   px-20  flex justify-end items-end gap-4 ">
         
          <img src={Arrow} alt="Arrow" className="-rotate-180 "/>
          <p className="font-[caveat] text-[#5ed0f9] origin-bottom -rotate-12 text-2xl ">
            Inquire us now to <br /> avail discounts!
          </p>
        </div>

        <div className="  container mx-auto mt-8">
          <div className="flex flex-row justify-center space-x-14  items-center font-extrabold text-2xl">
            <div className="flex flex-col space-y-5">
              <img src={Book1} alt="Book" className="w-[350px] h-auto" />
              <h2>Doughnuts And Doom</h2>
              <p className="font-normal text-lg text-[#60d0f7] hover:underline cursor-pointer">
                View Book Details >
              </p>
            </div>

            <div className="flex flex-col space-y-5">
              <img src={Book2} alt="Book" className="w-[350px] h-auto" />
              <h2>The Bend Of Luck</h2>
              <p className="font-normal text-lg text-[#60d0f7] hover:underline cursor-pointer">
                View Book Details >
              </p>
            </div>

            <div className="flex flex-col  space-y-5">
              <img src={Book3} alt="Book" className="w-[350px] h-auto" />
              <h2>The Underwater Welder</h2>
              <p className="font-normal text-lg text-[#60d0f7] hover:underline cursor-pointer">
                View Book Details >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreBooks;
