import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Upload from "./Upload";
import Home from "./Home";
import Contact from "./Contact";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./nav";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
