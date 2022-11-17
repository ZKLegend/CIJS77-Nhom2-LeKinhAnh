import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to React Vite Micro App!</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
