import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderBar from "./components/Header/HeaderBar";
import HeroSection from "./components/HeroSection/HeroSection";
import backgroundImage from "./assets/banner-bg.png";
import CommitmentSection from "./components/CommitmentSection/CommitmentSection";
import ExploreBooks from "./components/ExploreBooks/ExploreBooks";
import ShopUs from "./components/ExploreBooks/ShopUs";
import Testimonial from "./components/ExploreBooks/Testimonial";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (data) => {
    setSearchResults(data);
  };

  return (
    <Router>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: searchResults ? "none" : `url(${backgroundImage})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"
        }}
      >
        <HeaderBar onSearch={handleSearchResults} />
        <main className="flex-1 ">
          {searchResults === null ? (
            <div>
              <HeroSection />
              <CommitmentSection />
              <div className="bg-white">
                <ExploreBooks />
                <ShopUs />
                <Testimonial />
                <FAQ />
              </div>
            </div>
          ) : (
            <div className="bg-[#ffffff]">{searchResults} </div>
          )}
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
