import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./features/Search";
import Nav from "./features/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import './styles/App.css';

function App() {


  return (
    <div className="app-container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
    </div>
  )
}

export default App
