import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Jobs from "./pages/Jobs";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    // <>
    //   <Home />
    //   <Registration />
    //   <Login />
    // </>
  );
}

export default App;
