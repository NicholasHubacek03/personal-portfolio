import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./containers/aboutme";
import Projects from "./containers/projects";
import Contact from "./containers/contact";
import Home from "./containers/Home";
import BottomTabBar from "./components/BottomTabBar";

class App extends React.Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

         {/* Include the BottomTabBar component */}
         <BottomTabBar />
         
      </div>
    </Router>
    );
  }
  
}

export default App;
