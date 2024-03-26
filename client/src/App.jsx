import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderBar from "./components/Header/HeaderBar";
import HeroSection from "./components/HeroSection/HeroSection";
import backgroundImage from "./assets/banner-bg.png";

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
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"
        }}
      >
        <HeaderBar onSearch={handleSearchResults} />
        <main className="flex-1">{searchResults || <HeroSection />}</main>
        <footer className="bg-blue-500 text-center py-4">Footer</footer>
      </div>
    </Router>
  );
}

export default App;
