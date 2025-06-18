import React from 'react';
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Login" element={<Login />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
