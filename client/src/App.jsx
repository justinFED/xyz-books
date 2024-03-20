import React from "react";
import HeaderBar from "./components/Header/HeaderBar";
import HeroSection from "./components/HeroSection/HeroSection";
import backgroundImage from "./assets/bg.jpg";

function App() {
  return (
    <div className="flex flex-col min-h-screen" >
      <HeaderBar />
      <main className="flex-1 bg-top" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <HeroSection />
      </main>
      <footer className="bg-blue-500 text-center py-4">
        Footer
      </footer>
    </div>
  );
}

export default App;
