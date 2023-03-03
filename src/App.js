import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Home from "./pages/Home";
// import Header from "./components/Header";
// import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
