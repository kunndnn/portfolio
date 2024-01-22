// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
// import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import ContactUs from "./components/ContactUs";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/"
            element={
              <div>
                <h2>Home</h2>
                <p>My Portfolio!</p>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
