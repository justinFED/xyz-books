import Book1 from "../../assets/Book1.png";
import Book2 from "../../assets/Book2.png";
import Book3 from "../../assets/Book3.png";


function ExploreBooks() {
  return (
    <section className="  w-full  md:py-16 ">
      <div className="  flex flex-col items-center justify-center md:flex md:justify-center">
        <div className="  container   text-center text-[#151b53] ">
          <h1 className="text-3xl font-extrabold mb-6">Explore Our Books</h1>
          <p>
            With our dedicated customer support team, you can rest easy knowing
            that we're doing everything
            <br />
            we can to save you time, money, and stress.
          </p>
        </div>

        <div className="  container mx-auto mt-24 ">
          <div className="flex flex-row justify-center space-x-14  items-center font-extrabold text-lg">
            <div className="flex flex-col space-y-5">
              <img src={Book1} alt="Image 1" className="w-[250px] h-auto" />
              <h2>Doughnuts And Doom</h2>
              <p className="font-normal text-sm text-[#60d0f7]">
                View Book Details >
              </p>
            </div>

            <div className="flex flex-col space-y-5">
              <img src={Book2} alt="Image 2" className="w-[250px] h-auto" />
              <h2>The Bend Of Luck</h2>
              <p className="font-normal text-sm text-[#60d0f7]">
                View Book Details >
              </p>
            </div>

            <div className="flex flex-col  space-y-5">
              <img src={Book3} alt="Image 3" className="w-[250px] h-auto" />
              <h2>The Underwater Welder</h2>
              <p className="font-normal text-sm text-[#60d0f7]">
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
