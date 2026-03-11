import React from "react";
import "./Router/style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Router/Home";
import About from "./Router/About";
import Services from "./Router/Services";
import WebDev from "./Router/WebDev";
import AppDev from "./Router/AppDev";
import UIUX from "./Router/UIUX";
import Contact from "./Router/Contact";
import Profile from "./Router/Profile";
import Settings from "./Router/Settings";


export default function App() {
  return (
    <BrowserRouter>

      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </div>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested Routes */}
        <Route path="/services" element={<Services />}>
          <Route path="web" element={<WebDev />} />
          <Route path="app" element={<AppDev />} />
          <Route path="uiux" element={<UIUX />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}
