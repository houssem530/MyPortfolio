import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
              <Toaster />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export default App;
