import { useState } from "react";
import NavBar from "./components/NavBar";
import AllProducts from "./components/AllProducts";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Welcome to Strangers Things</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
