import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderBar from "./components/Header/HeaderBar";
import HeroSection from "./components/HeroSection/HeroSection";
import backgroundImage from "./assets/bg.jpg";
import SearchBook from "./components/SearchBook";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <HeaderBar />
        <main className="flex-1 bg-top" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
          <HeroSection />
          <SearchBook />
        </main>
        <footer className="bg-blue-500 text-center py-4">
          Footer
        </footer>
      </div>
    </Router>
  );
}

export default App;
