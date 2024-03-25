import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderBar from "./components/Header/HeaderBar";
import HeroSection from "./components/HeroSection/HeroSection";
import backgroundImage from "./assets/bg.jpg";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (data) => {
    setSearchResults(data);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <HeaderBar onSearch={handleSearchResults} />
        <main className="flex-1 bg-top" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
          {searchResults || <HeroSection />}
        </main>
        <footer className="bg-blue-500 text-center py-4">
          Footer
        </footer>
      </div>
    </Router>
  );
}

export default App;
