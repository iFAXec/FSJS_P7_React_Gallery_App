import React from "react";
import apiKey from "./config";
import { Route, Routes } from "react-router-dom";

//App Components
import Sunset from "./components/Sunset";
import Rainbow from "./components/Rainbow";
import Waterfall from "./components/Waterfall";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SearchForm from "./components/SearchForm";



function App() {
  return (
    <div className="container">

      <SearchForm />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sunset" element={<Sunset />} />
        <Route path="waterfall" element={<Waterfall />} />
        <Route path="rainbow" element={<Rainbow />} />
      </Routes>
    </div>
  );
}

export default App;





