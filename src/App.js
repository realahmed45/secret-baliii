import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHome from "./components/homepage";
import Homepage from "./components/secondhomepage";
import Property1 from "./components/property1";
import Property2 from "./components/property2";
import Property3 from "./components/property3";
import Property4 from "./components/property4";
import Rooms from "./components/Rooms";
import Faqs from "./components/Faqs";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<MainHome />} />

        {/* Route for /home-page */}
        <Route path="/home-page" element={<Homepage />} />
        <Route path="/property-1" element={<Property1 />} />
        <Route path="/property-2" element={<Property2 />} />
        <Route path="/property-3" element={<Property3 />} />
        <Route path="/property-4" element={<Property4 />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
