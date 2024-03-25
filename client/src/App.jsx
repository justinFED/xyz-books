import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import HeaderBar from "./components/Header/HeaderBar";
import HeroSection from "./components/HeroSection/HeroSection";
import backgroundImage from "./assets/bg.jpg";
import BookPage from "./components/BookPage";

function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
      <div className="flex flex-col min-h-screen">
        <HeaderBar />
        <main className="flex-1 bg-top" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
          <HeroSection />
          <BookPage />
        </main>
        <footer className="bg-blue-500 text-center py-4">
          Footer
        </footer>
      </div>
    </Router>
  );
}

export default App;
