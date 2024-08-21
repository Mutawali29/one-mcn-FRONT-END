import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from "./components/Services";
import Process from './components/Process';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Copy from './components/Copy';
import './index.css'; 

function App() {
  return (
    <>
      <div className="bg-main h-full w-full">
        <Navbar />
        <Home />
        <Services />
        <Process />
        <Blog />
        
        <Copy />
      </div>
    </>
  );
}

export default App;
