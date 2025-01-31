import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import BooksPage from "./page/BooksPage.jsx";
import AboutPage from "./page/AboutPage.jsx";
import ContactPage from "./page/ContactPage.jsx";
import AddCart from "./page/AddCartPage.jsx";
import Profile from "./page/ProfilePage.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<AddCart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
