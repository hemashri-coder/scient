import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Bookings from "./pages/Bookings";
import About from "./pages/About";

import "./App.css";   



function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/rooms" element={<Rooms />} />

        <Route path="/bookings" element={<Bookings />} />

        <Route path="/about" element={<About />} />

        
      </Routes>

    </BrowserRouter>
  );
}


export default App;