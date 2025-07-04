import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";


function App() {

  return (
    <>
      <Home />
      <Registration />
      <Login />
    </>
  );
}

export default App;
