import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectGallery from "./pages/ProjectGallery";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project-gallery" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
