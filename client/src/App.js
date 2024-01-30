import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Hero from "./components/Hero";
import HeroPowerForm from "./components/HeroPowerForm";
import Power from "./components/Power";
import PowerEditForm from "./components/PowerEditForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes/:id" element={<Hero />} />
        <Route path="/powers/:id" element={<Power />} />
        <Route path="/powers/:id/edit" element={<PowerEditForm />} />
        <Route path="/hero_powers/new" element={<HeroPowerForm />} />
      </Routes>
    </Router>
  );
}

export default App;