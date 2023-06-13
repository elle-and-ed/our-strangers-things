import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import AllProducts from "./components/AllProducts";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
   
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Strangers Things</h1>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;
