import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About.jsx";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
